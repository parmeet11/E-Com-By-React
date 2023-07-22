import HeroSection from './components/HeroSection';
import {useProductContext} from "./context/productContext";

const About = () => {

const {myName} = useProductContext();

const data = {
  name : "E-Shop"
}

  return (
    <>
    {myName}
    <HeroSection mydata={data} />
    </>
  )
}

export default About;
