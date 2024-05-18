import React from "react";
import Navbar from "./ui/Navbar";
import { ConnectButton } from "./web3/ConnectButton";
import { ContractInteractions } from "./web3/ContractInteractions";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-[100vh] items-center">
        <Navbar/>
        <div>
          <ContractInteractions />
        </div>
      </div>
    </>
  );
}

export default App;
