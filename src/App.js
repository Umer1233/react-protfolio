import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Component/Header";
import LandingSection from "./Component/LandingSection";
import ProjectsSection from "./Component/ProjectsSection";
import ContactMeSection from "./Component/ContactMeSection";
import Footer from "./Component/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Component/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
