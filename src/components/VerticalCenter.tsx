export default function VerticalCenter({children}: {children: React.ReactNode}) {
return (
        <div className={"d-flex align-items-center justify-content-center h-100"}>
            {children}
        </div>
    )
}