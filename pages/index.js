import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solvive</title>
        <meta name="description" content="Landing page of Solvive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
}
