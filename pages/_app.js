import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const { layoutMessage, ...restPageProps } = pageProps;
  
  return (
    <Layout layoutMessage={layoutMessage}>
      <Component {...restPageProps} />
    </Layout>
  );
}
