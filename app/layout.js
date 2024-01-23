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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
