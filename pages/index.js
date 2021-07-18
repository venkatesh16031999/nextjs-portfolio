import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme.js'
import HeroSection from '../section/home/hero-section';
import SkillsSection from '../section/home/skills-section';
import Header from '../components/header/header';
import ExperianceSection from '../section/home/experiance-section';

const Home = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <HeroSection />
      <SkillsSection />
      <ExperianceSection />
    </ThemeProvider>
  )
}

export default Home;
