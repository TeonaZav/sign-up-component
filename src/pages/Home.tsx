import SignUpForm from "../components/SignUpForm";
import HeroSection from "../components/SectionHero";
import FreeTrialCard from "../components/FreeTrialCard";
function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <div>
        <FreeTrialCard />
        <SignUpForm />
      </div>
    </div>
  );
}

export default Home;
