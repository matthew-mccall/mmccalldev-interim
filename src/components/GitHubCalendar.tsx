'use client'

import GitHubCalendar from "react-github-calendar";
import {useEffect, useState} from "react";

export default function GitHubCalendarWrapper() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        if (window && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    })

    return (<GitHubCalendar username={"matthew-mccall"} colorScheme={theme} />)
}