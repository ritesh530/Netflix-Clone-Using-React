import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
