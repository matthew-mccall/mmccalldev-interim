import VerticalCenter from "@mmccalldev/components/VerticalCenter";

export default async function Page() {
    return (
        <>
            <div style={{height: "50vh"}}>
                <VerticalCenter>
                    <div className={"container text-light"}>
                        <h1 className={"display-3 fw-semibold"}>Matthew's Blog</h1>
                        <p className={"lead"}>A collection of my thoughts, ideas, and announcements.</p>
                    </div>
                </VerticalCenter>
            </div>
            <p className={"text-center text-light"}>Coming soon...</p>
        </>
    )
}