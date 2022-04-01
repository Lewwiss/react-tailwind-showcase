import Head from 'next/head';
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import Features from '../components/Features';
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
      <Features />
      <Footer />
    </div>
  );
};

export default Home;