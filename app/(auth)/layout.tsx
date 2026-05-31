



import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { FaWeight } from "react-icons/fa";


const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight : ["400", "500", "600", "700","800" ],
});



export const metadata: Metadata = {
  title: "Sport On website Admin- Login",
  description: "Sport On is a website dedicated to providing comprehensive information and resources for sports enthusiasts. Whether you're a fan of football, basketball, tennis, or any other sport, Sport On offers the latest news, scores, and updates to keep you informed. Our platform also features in-depth analysis, player profiles, and expert commentary to enhance your sports experience. Join our community of passionate sports fans and stay connected with all things sports on Sport On.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className={`${poppins.variable} ${poppins.variable} h-full antialiased`}>
        
        {children}
    
        </body>
    </html>
  );
}
