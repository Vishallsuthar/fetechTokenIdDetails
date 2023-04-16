import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider,  getDefaultClient } from "connectkit";
import Header from '@/Components/Header';

const alchemyId = process.env.ALCHEMY_ID;


  let client = createClient(
    getDefaultClient({
      appName: "Wallet",
      alchemyId: alchemyId,
    }),
  )



export default function App({ Component, pageProps }: AppProps) {
  return <> 
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Header/>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </>
}
