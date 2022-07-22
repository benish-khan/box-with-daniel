import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Box with Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Box with Daniel" />
        <p className="description">
          Yelp{" "}
          <code>https://www.yelp.com/biz/box-with-daniel-san-francisco</code>
        </p>
        <p className="description">
          Instagram
          <a href="https://www.instagram.com/boxwithdaniel/"></a>
        </p>
        <p className="description">
          TikTok <code>https://www.tiktok.com/@boxwithdaniel</code>
        </p>
        <p className="description">
          Calendly <code>https://calendly.com/boxwithdaniel</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
