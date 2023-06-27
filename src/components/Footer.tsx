export default function Footer() {
    return (
        <footer className={"bg-body-secondary py-5"}>
            <div className={"container text-center text-muted"}>
            Copyright &copy; {
                new Date().getFullYear()
            } Matthew McCall. All rights reserved.
            </div>
        </footer>
    )
}