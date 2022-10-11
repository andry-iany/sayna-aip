import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "leaflet/dist/leaflet.css";

import type { AppProps } from "next/app";

import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";

// progress
import "../setup/progress/style.css";
import { setupNavProgress } from "../setup/progress";

setupNavProgress();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}

export default MyApp;
