import {ContentProvider, Content} from "@mmccalldev/lib/Content";
import {Octokit} from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

interface GitHubPushEvent {
    repos: {
        name: string
        commitCount: number
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

    let pushEvents = res.data.filter((event) => event.type === 'PushEvent');

    let initialPushEventsMap = new Map<string, Map<string, number>>;
    let pushEventsGroupedByDay = pushEvents.reduce((acc, event) => {
        const date = new Date(event.created_at!);
        const key = date.toLocaleDateString()
        const repoGroup = acc.get(key);

        if (!repoGroup) {
            // @ts-ignore
            acc.set(key, new Map([[event.repo.name, event.payload.commits.length]]));
            return acc;
        }

        const commitCount = repoGroup.get(event.repo.name);

        if (!commitCount) {
            // @ts-ignore
            repoGroup.set(event.repo.name, event.payload.commits.length);
            return acc;
        }

        // @ts-ignore
        repoGroup.set(event.repo.name, commitCount + event.payload.commits.length);

        return acc;
    }, initialPushEventsMap);

    pushEventsGroupedByDay.forEach((repoGroup, date) => {
        repoGroup.forEach((commitCount, repoName) => {

            const userNameLocation = repoName.indexOf('matthew-mccall/');
            const shortenedRepoName = userNameLocation === 0 ? repoName.slice(15) : repoName;

            // replace hyphens with non-breaking hyphens
            const formattedRepoName = shortenedRepoName.replace(/-/g, '\u2011');

            content.push({
                title: `${commitCount} commits to ${formattedRepoName}`,
                date: date,
            });
        });
    });

    return content;
}

export default GetGitHubContent;