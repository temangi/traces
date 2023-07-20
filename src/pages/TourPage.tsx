import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SendRequestTour from "@/components/TourPage/SendRequest/SendRequestTour";
import React, { useState, useEffect } from "react";
import Map from "@/components/TourMap/TourMap";
import ItineraryBlock from "@/components/ItineraryBlock/ItineraryBlock";
import { utilsArray } from "@/constants/toursUtils";
import ToursWhatYouGet from "@/components/Tours_WhatYouGetBlock/ToursWhatYouGet";
import AboutTour from "@/components/TourPage/About Tour/AboutTour";
import Includes from "@/components/TourPage/Price Includes/Includes";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const TourPage: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const router = useRouter()
  const { lng, lat } = router.query;

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
      <ItineraryBlock />
      <Map width = {lat} longitude = {lng}/>
      <AboutTour />
      <ToursWhatYouGet array={utilsArray} />
      <Includes />
      <SendRequestTour />
      <Footer />
    </>
  );
};

export default TourPage;