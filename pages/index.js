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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Workflow />
      <Contacts />
    </div>
  );
}