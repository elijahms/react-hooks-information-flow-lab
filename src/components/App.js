import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import React, {useState} from "react"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
      <Header handleDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
