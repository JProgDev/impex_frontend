import Head from "next/head";
import Script from "next/script";
import { Navbar, Footer } from "../components";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://code.iconify.design/2/2.1.0/iconify.min.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

export default MyApp;
