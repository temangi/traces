import React,{useState,useEffect} from "react";
import AboutUs from "@/components/AboutUs/AboutUs";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/MainBlock/Main";
import { AboutMain } from "@/constants/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import OurTeam from "@/components/OurTeam/OurTeam";

const AboutUsPage: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[]);

  if (isLoading) {
    return (
      <div className="loading">
        <Box >
          <CircularProgress />
        </Box>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Main array={AboutMain} />
      <AboutUs />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AboutUsPage;