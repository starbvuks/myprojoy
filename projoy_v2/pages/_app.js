import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { MenuProvider } from "../context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;
