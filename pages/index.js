import Head from "next/head";
import Contacts from "../components/contacts/Contacts";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Workflow from "../components/workflow/Workflow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solvive</title>
        <meta name="description" content="Landing page of Solvive" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Hero />
      <Services />
      <Workflow />
      <Contacts />
    </div>
  );
}
