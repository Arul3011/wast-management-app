
import AuthProvider from "@/componuntes/Session";
import "./globals.css";


export const metadata = {
  title: "Wastemanagement",
  description: "nothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <AuthProvider>
      <body>
        {children}
      </body>
        </AuthProvider>
    </html>
  );
}
