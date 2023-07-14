interface ColorScheme {
    scheme: 'Complementary' | 'Analogous' | 'Triadic' | 'Split Complementary' | 'Tetradic' | 'Monochromatic';
    hues?: number[];
}

export default function DynamicBackground({children, blobCount = 5}: {
    children: React.ReactNode,
    blobCount?: number
}) {

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
    for (let i = 0; i < blobCount; i++) {
        sampledHues.push(colorScheme.hues[Math.floor(Math.random() * colorScheme.hues.length)]);
    }

    return (
        <div style={{
            backgroundColor: "black",
            zIndex: "-2",
            position: "relative"
        }}>
            <svg width={"100%"} height={"100%"} style={{
                position: "absolute",
                zIndex: "-1",
                filter: "blur(72px)",
            }}>
                {
                    sampledHues.map((hue, i) => {
                        const lightness = colorScheme.scheme === 'Monochromatic' ? 50 : Math.random() * 50 + 25;
                        return (<circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r={`${Math.random() * 100 + 72}`} fill={`hsla(${hue}, 100%, ${lightness}%, 0.75)`}/>)
                    })
                }
            </svg>
            {children}
        </div>
    )
}