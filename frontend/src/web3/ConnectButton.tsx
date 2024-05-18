import { useSorobanReact } from "@soroban-react/core";

export const ConnectButton = () => {
  const sorobanContext = useSorobanReact();
  const { activeChain, address, disconnect, setActiveConnectorAndConnect } =
    sorobanContext;
  const activeAccount = address;
  const browserWallets = sorobanContext.connectors;
  if (!activeAccount)
    return (
      <div className="p-4">
        {!activeAccount && (
          <p className="text-lg m-4"></p>
        )}
        {!activeAccount &&
          browserWallets.map((w) => (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              key={w.name}
              onClick={() => {
                setActiveConnectorAndConnect && setActiveConnectorAndConnect(w);
              }}
            >
              {/* {w.name} */}
              Connect Wallet
            </button>
          ))}
      </div>
    );

  return (
    <div className="p-4 text-lg flex flex-col gap-2">
      {/* <p>
        Active Chain: <b>{activeChain?.name}</b>
      </p>
      <p>
        Wallet Address: <b>{address}</b>
      </p> */}
      {/* <div
        key={supportedChains[0].name}
        // isDisabled={chain.network === activeChain?.network}
        onClick={() => {
          // toast.error(`Not implemented yet. Please switch chain via the wallet extension.`)
          setActiveChain && setActiveChain(supportedChains[0]);
        }}
      >
        <p>{supportedChains[0].name}</p>
      </div> */}
      <button
        className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-full w-min"
        onClick={async () => {
          console.log("Disconnecting");
          await disconnect();
        }}
      >
        Disconnect Wallet
      </button>
    </div>
  );
};
