import "../app/globals.css";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
