import { useRouter } from "next/router";
import { Provider } from "react-redux";
import GlobalState from "../components/Global/GlobalState";
import { store } from "../services/store";
import "../styles/globals.css";

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  const router = useRouter();

  const pathname = router.pathname;

  if (pathname == "/account/login" || pathname == "/account/signup") {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <GlobalState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalState>
    </Provider>
  );
};

export default MyApp;
