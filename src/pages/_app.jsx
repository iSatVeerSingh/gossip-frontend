import { Provider } from "react-redux";
import { store } from "../services/store";
import "../styles/globals.css";

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
