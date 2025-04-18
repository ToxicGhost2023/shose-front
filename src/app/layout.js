import { yekan } from "@/utils/fonts";
import Layout from "@/components/Layout/Layout";
import "./globals.css";
import { ReduxProvider } from '@/providers/reduxProvider'





export const metadata = {
  title: "کفشکده",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {





  return (
    <html lang="fa" dir="rtl">
      <body
        className={yekan.className}
      >
        <ReduxProvider>
          <Layout >
            {children}
          </Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
