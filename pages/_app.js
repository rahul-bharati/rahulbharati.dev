import { useEffect } from "react";
import "./styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const themeMode = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", themeMode);
  }, []);
  return <Component {...pageProps} />;
}
