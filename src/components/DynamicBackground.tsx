import {useEffect, useRef} from "react";

interface ColorScheme {
    scheme: 'Complementary' | 'Analogous' | 'Triadic' | 'Split Complementary' | 'Tetradic' | 'Monochromatic';
    hues?: number[];
}

export default function DynamicBackground({children}: {children: React.ReactNode}) {

    const svgRef = useRef<SVGSVGElement>(null);

    // pick random color scheme
    const colorSchemes: ColorScheme[] = [
        { scheme: 'Complementary' },
        { scheme: 'Analogous' },
        { scheme: 'Triadic' },
        { scheme: 'Split Complementary' },
        { scheme: 'Tetradic' },
        { scheme: 'Monochromatic' }
    ];

    const colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

    // generate array of colors based on color scheme
    const baseHue = Math.random() * 360;

    switch (colorScheme.scheme) {
        case 'Complementary':
            colorScheme.hues = [baseHue, baseHue + 180];
            break;
        case 'Analogous':
            colorScheme.hues = [baseHue, baseHue + 30, baseHue + 60];
            break;
        case 'Triadic':
            colorScheme.hues = [baseHue, baseHue + 120, baseHue + 240];
            break;
        case 'Split Complementary':
            colorScheme.hues = [baseHue, baseHue + 150, baseHue + 210];
            break;
        case 'Tetradic':
            colorScheme.hues = [baseHue, baseHue + 90, baseHue + 180, baseHue + 270];
            break;
        case 'Monochromatic':
            colorScheme.hues = [baseHue]
            break;
    }

    // sample 10 colors from array
    const sampledHues = [];
    for (let i = 0; i < 10; i++) {
        sampledHues.push(colorScheme.hues[Math.floor(Math.random() * colorScheme.hues.length)]);
    }

    useEffect(() => {
        if (!svgRef.current) return
        let svg = svgRef.current;

        const animate = () => {

            const circles = svg.getElementsByTagName("circle");
            const circleCount = circles.length;
            const circleSpeed = 10;

            for (let i = 0; i < circleCount; i++) {
                const circle = circles[i];
                const x = parseFloat(circle.getAttribute("cx") || "0");
                const y = parseFloat(circle.getAttribute("cy") || "0");
                const r = parseFloat(circle.getAttribute("r") || "0");

                const angle = Math.random() * 2 * Math.PI;
                const dx = Math.cos(angle) * circleSpeed;
                const dy = Math.sin(angle) * circleSpeed;

                circle.setAttribute("cx", `${x + dx * r}%`);
                circle.setAttribute("cy", `${y + dy * r}%`);
            }

            requestAnimationFrame(animate);
        }
    })

    return (
        <>
            <svg ref={svgRef} width={"100%"} height={"100%"} style={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "-1",
                filter: "blur(72px)"
            }}>
                {
                    sampledHues.map((hue, i) => {
                        const lightness = colorScheme.scheme === 'Monochromatic' ? 50 : Math.random() * 50 + 25;
                        return (<circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r={`${Math.random() * 200 + 5}`} fill={`hsla(${hue}, 100%, ${lightness}%, 0.75)`}/>)
                    })
                }
            </svg>
            {children}
        </>
    )
}