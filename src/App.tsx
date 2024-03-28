import { AppProvider } from "@shopify/polaris";
import ScrollToTop from "./components/ScrollToTop";
import RenderRouter from "./routes";
import enTranslations from "@shopify/polaris/locales/en.json";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <ScrollToTop />
      <RenderRouter />
    </AppProvider>
  );
}

export default App;
