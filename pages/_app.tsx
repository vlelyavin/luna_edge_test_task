import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Router from "next/router";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoadingStatus] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoadingStatus(true);
    const handleComplete = () => setLoadingStatus(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);
  return (
    <Provider store={store}>
      {loading && <Loader />}
      <Component {...pageProps} />
    </Provider>
  );
}
