import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import OurTeam from "@/components/OurTeam/OurTeam";
import React,{useState,useEffect} from "react";
import AboutOurTeam from "@/components/AboutOurTeam/AboutOurTeam";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const OurTeamPage: React.FC = () => {
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
      <AboutOurTeam />
      <OurTeam />
      <Footer />
    </>
  );
};

export default OurTeamPage;
