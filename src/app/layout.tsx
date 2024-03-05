import type { Metadata } from "next";
import "./styles/globals.css";
import { LayoutPage } from "@/views";

export const metadata: Metadata = {
    title: "Rostelecom Store",
    description: "Rostelecom Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LayoutPage>
                    {children}
                </LayoutPage>
            </body>
        </html>
    );
}
