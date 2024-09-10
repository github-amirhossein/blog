import { Route , Routes } from "react-router-dom";
import { Home } from "./pagem/hom/Home";
import { About } from "./pagem/about/about";
import { Maghaleh } from "./pagem/maghale/maghale";
import { Create } from "./conponent/create";
import { Erore } from "./pagem/eror/eror";
import { createContext , useState } from "react";

export const temsi=createContext(null)

function App() {
  const [tem,settem]=useState(true)


  return (
    
    <temsi.Provider value={{tem,settem}}>
    <Routes>

    <Route path="*" element={<Erore />} />
    <Route path="/" element={<Home />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/article/:id" element={<Maghaleh />} /> 
    <Route path="/create-article" element={<Create />} />

    </Routes>
    </temsi.Provider>
  );
}



export default App;
