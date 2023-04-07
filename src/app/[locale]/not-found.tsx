import "./globals.css";

export default function RootNotFound({ children, params }: { children: React.ReactNode; params: any }) {
    return (
        <html lang="en">
            <body className="bg-white text-black">Not found! {params?.locale}</body>
        </html>
    );
}
