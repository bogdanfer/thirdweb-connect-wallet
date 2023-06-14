
import Gallery from "components/Gallery";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

function App() {
  const desiredChainId = ChainId.Goerli;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Gallery />
    </ThirdwebProvider>
  );
}

export default App;
