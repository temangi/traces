import React, { useState, useEffect } from "react";
import ShareTours from "@/components/ShareTour/ShareTour";
import Request from "@/components/Request/Request";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ShareTourPage: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      <ShareTours />
      <Request />
      <Footer />
    </>
  );
};

export default ShareTourPage;