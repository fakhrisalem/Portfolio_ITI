import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import About from "./components/about";
import Skills from "./components/skills";
import Home from "./components/home";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Home/>
          <About/>
          <Skills/>
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

