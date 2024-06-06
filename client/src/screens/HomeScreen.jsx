// import Hero from '../components/Hero';
import { lazy } from "react";
const Hero = lazy(() => import("../components/Hero"));

const HomeScreen = () => {
  
  return <Hero />;
};

export default HomeScreen;
