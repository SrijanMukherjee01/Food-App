import { useState } from "react";

import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [Visibility, setVisibility] = useState(false);
  const setShowHandler = () => {
    setVisibility(true);
  };
  const hideCartHandler = () => {
    setVisibility(false);
  };

  return (
    <CartProvider>
      {Visibility && <Cart onClose={hideCartHandler} />}
      <Header onShow={setShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
