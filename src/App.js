import { useState } from "react";
// import Yoxlama from "./Yoxlama";
// import NameShower from "./NameShower";
// const Yoxlama = require("./Yoxlama");
import List from "./List";
import Table from "./Table";
import Navigation from "./Navigation";
import { ProductProvider } from "./ProductContext";
const App = () => {
  
 
  

  return (

    <ProductProvider>
     <Navigation></Navigation>
        
      <Table />
    
    </ProductProvider>
  );
};
export default App;
