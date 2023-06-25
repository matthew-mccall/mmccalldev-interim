import NavigationBar from "@mmccalldev/components/NavigationBar";
import VerticalCenter from "@mmccalldev/components/VerticalCenter";

export default function Page() {
    return (
        <>
            <NavigationBar position={"fixed"} />
            <div className={"vh-100"}>
                <VerticalCenter>
                    <div className={"container text-light"}>
                        <h1 className={"display-1 fw-semibold"}>Page Not Found</h1>
                    </div>
                </VerticalCenter>
            </div>
        </>
    )
}