import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";

function BinaryBit({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default BinaryBit;
