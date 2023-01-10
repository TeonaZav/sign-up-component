import SignUpForm from "./components/SignUpForm";
import HeroSection from "./components/SectionHero";
import FreeTrialCard from "./components/FreeTrialCard";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <div>
        <FreeTrialCard />
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
