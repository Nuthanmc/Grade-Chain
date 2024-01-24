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
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
        {/* Include the PDF.js library */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js" integrity="sha512-ml/QKfG3+Yes6TwOzQb7aCNtJF4PUyha6R3w8pSTo/VJSywl7ZreYvvtUso7fKevpsI+pYVVwnu82YO0q3V6eg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </head>
      <body>
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
