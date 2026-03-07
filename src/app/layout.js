import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="GTM-KNH9MS7R" />
        {children}
      </body>
    </html>
  );
}
