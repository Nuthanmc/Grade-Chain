import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Certi-Block",
  description: "A blockchain based certificate verification system",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
