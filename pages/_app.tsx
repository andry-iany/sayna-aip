import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "leaflet/dist/leaflet.css";

import type { AppProps } from "next/app";

import { useEffect, useMemo } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";

// progress
import "../setup/progress/style.css";
import { setupNavProgress } from "../setup/progress";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import fr from "../lang/fr.json";

const allMessages = { en, fr };
type Locale = keyof typeof allMessages;

setupNavProgress();

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = "fr" } = useRouter();
  const messages = useMemo(() => allMessages[locale as Locale], [locale]);

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </IntlProvider>
  );
}

export default MyApp;
