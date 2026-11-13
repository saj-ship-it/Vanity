// Self-hosted fonts: served from our own domain, so no request goes to Google or another third party.
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
