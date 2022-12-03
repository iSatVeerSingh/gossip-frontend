import "../styles/globals.css"

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
