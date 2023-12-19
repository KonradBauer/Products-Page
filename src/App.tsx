import { Extension } from "./components/Extension/Extension";
import { Faq } from "./components/FAQ/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Subheader } from "./components/Subheader/Subheader";

export const App: React.FC = () => {
  return (
    <div className="m-auto pt-8 font-rubik-500">
      <Header />
      <Subheader />
      {/* <Features /> */}
      <Extension />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
