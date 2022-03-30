import Head from 'next/head';
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import Setup from '../components/Setup';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>React Tailwind Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Landing />
      <Setup />
      <Features />
      <Integrations />
      <Footer />
    </div>
  );
};

export default Home;