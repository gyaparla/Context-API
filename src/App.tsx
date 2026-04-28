import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <main>
        <NavBar />
          <ProductsList />
      </main>
    </>
  );
}

export default App;
