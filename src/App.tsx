import { Extension } from "./components/Extension/Extension";
import { Faq } from "./components/FAQ/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { GlobalContainer } from "./components/GlobalContainer/GlobalContainer";
import { Header } from "./components/Header/Header";
import { Subheader } from "./components/Subheader/Subheader";

export const App: React.FC = () => {
  return (
    <GlobalContainer>
      <Header />
      <Subheader />
      <Features />
      <Extension />
      <Faq />
      <Footer />
    </GlobalContainer>
  );
};

export default App;
