import '~/shared/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Component {...pageProps} />;
    </div>
  );
}
