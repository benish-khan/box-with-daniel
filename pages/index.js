import Head from "next/head";
import Header from "@components/Header";
import ContactCard from "@components/ContactCard";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "gray" }}
      className="flex flex-col justify-between h-screen w-full"
    >
      <Head>
        <title>Box with Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full h-1"></div>

        <img className="w-72" src="/bwd_logo.svg" />

        <div className="flex mt-10">
          <div className="p-2">
            <a href="https://www.yelp.com/biz/box-with-daniel-san-francisco">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/yelp.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.instagram.com/boxwithdaniel/">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/instagram.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.tiktok.com/@boxwithdaniel">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/tiktok.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://calendly.com/boxwithdaniel">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/clock.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="mailto: info@boxwithdaniel.com">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/mail.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="tel:+14153095378">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/old-typical-phone.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
