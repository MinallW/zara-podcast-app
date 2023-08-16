import '@fontsource/inter';

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body>
                <b>layout podcast</b>
                {children}
            </body>
        </html>
    )
}
