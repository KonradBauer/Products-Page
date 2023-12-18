import { Faq } from "./components/FAQ/Faq";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App: React.FC = () => {
  return (
    <div className="m-auto pt-8 font-rubik-500">
      <Header />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
