import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { createContext } from "react";
import ContactComponent from "../components/Contact";
import { useTranslation } from "../hooks";
import api from "../services/apiService";

export const ContentContext = createContext({});

const Contact: NextPage = (props: any) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Contact | AIP</title>
        <meta name="description" content={t("meta.description_contact")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <ContactComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);

  const contactContentRes = await api.get<any>(
    `/contact?populate=deep&locale=${locale}`
  );

  const contactContent = contactContentRes.data?.data?.attributes;

  return {
    props: {
      ...localizedData,
      data: contactContent,
    },
  };
};

export default Contact;
