
import MainLandingPage from "@/components/templates/MainLandingPage";
import Head from "next/head";
import { cookies } from "next/headers";


export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  return (
    <>
      <Head>
        <title>شوور - خرید آنلاین کفش با بهترین کیفیت</title>
        <meta
          name="description"
          content="شوور، فروشگاه آنلاین کفش با تنوع بی‌نظیر و کیفیت بالا. جدیدترین مدل‌های کفش مردانه، زنانه و بچگانه را با قیمت مناسب خریداری کنید."
        />
        <meta
          name="keywords"
          content="خرید کفش, کفش آنلاین, شوور, کفش مردانه, کفش زنانه, کفش بچگانه, فروشگاه کفش"
        />
        <meta name="language" content="fa" />
        <meta name="dir" content="rtl" />
        <link rel="canonical" href="https://www.shoor.com" />
        <meta property="og:title" content="شوور - خرید آنلاین کفش با بهترین کیفیت" />
        <meta
          property="og:description"
          content="شوور، مقصد شما برای خرید کفش‌های باکیفیت و مدرن. تنوع مدل‌های کفش برای همه سنین با بهترین قیمت."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shoor.com" />
        <meta property="og:image" content="https://www.shoor.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شوور - خرید آنلاین کفش با بهترین کیفیت" />
        <meta
          name="twitter:description"
          content="با شوور، کفش‌های مورد علاقه‌تان را به‌راحتی و با بهترین قیمت خریداری کنید."
        />
        <meta name="twitter:image" content="https://www.shoor.com/images/twitter-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h-screen mt-[0px] ">
        <MainLandingPage token={token} />
      </main>
    </>
  );
}
