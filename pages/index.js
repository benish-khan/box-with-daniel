import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactCard from "@components/ContactCard";
import Image from "next/image";
import Logo from "../public/icons/Vectorbwd.svg";

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
        <Image src={Logo} alt="Company Logo" width={300} height={300} />
        <div className="flex flex-col  items-center mt-10">
          <ContactCard text="Phone number: 415-309-5378" />
          <ContactCard
            text="mail: info@boxwithdaniel.com"
            href="mailto:info@boxwithdaniel.com"
          />

          <code className="p-2 m-2">
            Website:
            <a
              className="cursor-pointer hover:text-blue-700 underline"
              target="blank"
              href="www.boxwithdaniel.com"
            >
              www.boxwithdaniel.com
            </a>
          </code>
        </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
