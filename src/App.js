// import { Stack } from "@mui/system";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >         <Navbar></Navbar>
        {/* <Sidebar  ></Sidebar> */}
      </Stack>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
