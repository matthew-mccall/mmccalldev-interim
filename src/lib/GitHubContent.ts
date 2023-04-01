import {ContentProvider, Content} from "@mmccalldev/lib/Content";
import {Octokit} from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

interface GitHubPushEvent {
    repos: {
        name: string
        commitCount: number
        link: string
    }[]
}

const GetGitHubContent: ContentProvider = async (): Promise<Content[]> => {
    const res = await octokit.rest.activity.listPublicEventsForUser({
        username: 'matthew-mccall',
    });

    if (!res.data) {
        return [];
    }

    let content: Content[] = [];

    let initialPushEventsMap = new Map<string, GitHubPushEvent>;

    let pushEvents = res.data.filter((event) => event.type === 'PushEvent');
    let pushEventsGroupedByDay = pushEvents.reduce((acc, event) => {
        const date = new Date(event.created_at!);
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;


        if (!acc.get(key)) {
            acc.set(key, {
                repos: [{
                    name: event.repo.name,
                    commitCount: event.payload.commits.length,
                    link: event.payload.commits[0].url,
                }],
            })

            return acc;
        }

        const repoGroup = acc.get(key)!;
        let index = repoGroup.repos.findIndex(repo => repo.name === event.repo.name);

        if (index === -1) {
           repoGroup.repos.push({
                name: event.repo.name,
                commitCount: event.payload.commits.length,
                link: event.payload.commits[0].url,
            });

            return acc;
        }

        repoGroup.repos[index].commitCount += event.payload.commits.length;

        return acc;
    }, initialPushEventsMap);

    for (const [key, value] of pushEventsGroupedByDay.entries()) {
        for (const repo of value.repos) {
            content.push({
                title: repo.name,
                description: `Pushed ${repo.commitCount} commits.`,
                link: repo.link,
                date: (new Date(key)).toISOString(),
            });
        }
    }

    for (const event of res.data) {

        if (!event.created_at || !event.type || !event.repo) {
            continue;
        }

        switch (event.type) {
            case 'PullRequestEvent':
                content.push({
                    title: `Opened a pull request to ${event.repo.name}`,
                    description: `Opened a pull request to ${event.repo.name}`,
                    link: event.payload.pull_request.html_url,
                    date: event.created_at,
                });
                break;
        }
    }

    return content;
}

export default GetGitHubContent;