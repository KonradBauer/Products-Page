import { Extension } from "./components/Extension/Extension";
import { Faq } from "./components/FAQ/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { GlobalContainer } from "./components/GlobalContainer/GlobalContainer";
import { Header } from "./components/Header/Header";
import { Subheader } from "./components/Subheader/Subheader";

import { Modal } from "./components/Modal/Modal";

export const App: React.FC = () => {
  return (
    <GlobalContainer>
      <Modal />
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
