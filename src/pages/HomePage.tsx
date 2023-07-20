import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Review/Reviews";
import Main from "@/components/MainBlock/Main";
import Destinations from "@/components/Destinations/Destinations";
import OurTeam from "@/components/OurTeam/OurTeam";
import { HomeMain } from "@/constants/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const HomePage: React.FC = () => {
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
      <Main array={HomeMain} />
      <Destinations />
      <Reviews />
      <OurTeam />
      <Footer />
    </>
  );
};

export default HomePage;
