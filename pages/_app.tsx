import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import { useEffect, useRef } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  // useEffect(() => {
  //   window.addEventListener(
  //     "load",
  //     () => {
  //       if (loaderRef.current) loaderRef.current.style.display = "none";
  //     },
  //     { once: true }
  //   );
  // }, []);

  return (
    <>
      {/* <div
        className="loader-overlay"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#504538",
          position: "fixed",
          zIndex: 2024,
          opacity: ".9",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "8rem",
        }}
        ref={loaderRef}
      >
        Loading...
      </div> */}
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}

export default MyApp;
