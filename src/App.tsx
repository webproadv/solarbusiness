import Hero from './components/Hero';
import StickyBar from './components/StickyBar';
import Context from './components/Context';
import Benefits from './components/Benefits';
import TechnicalSpecs from './components/TechnicalSpecs';
import Investment from './components/Investment';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBar />
      <Hero />
      <Context />
      <Benefits />
      <TechnicalSpecs />
      <Investment />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
