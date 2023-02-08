import Head from 'next/head';
import { ChatPage } from '~/pages/chat';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chattie</title>
      </Head>
      <ChatPage />
    </>
  );
}
