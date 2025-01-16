import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Vxer",
  description: "Vxer Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}