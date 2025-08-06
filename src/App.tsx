import { Header } from './components/Header';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { Contact } from './components/Contact';
import { resumeData } from './data/resume';
import { useFadeInAnimation } from './hooks/useFadeInAnimation';
import './App.css';

function App() {
  useFadeInAnimation();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <About />
        <ExperienceSection experiences={resumeData.experiences} />
        <Contact />
      </main>
    </>
  );
}

export default App;
