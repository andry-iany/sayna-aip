import type { NextPage } from "next";
import Head from "next/head";
import ContactComponent from "../components/Contact";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact | AIP</title>
        <meta name="description" content="Contact AIP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactComponent />
    </div>
  );
};

export default Contact;
