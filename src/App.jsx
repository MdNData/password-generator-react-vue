import { Navbar } from "./assets/components/navbar/Navbar";
import { Footer } from "./assets/components/footer/Footer";
import { PasswordGenerator } from "./assets/components/passwordGenerator/PasswordGenerator";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <PasswordGenerator />
      </main>
      <Footer />
    </>
  );
}

export default App;
