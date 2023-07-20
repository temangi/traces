import DestinationsCards from "@/components/DestinationsCards/DestinationsCards";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React,{useState,useEffect} from "react";
import { DestinationsMain } from "@/constants/Main";
import Main from "@/components/MainBlock/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const DestinationsPage: React.FC = () => {
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
      <Header/>
      <Main array={DestinationsMain}/>
      <DestinationsCards/>
      <Footer/>
    </>
  );
};

export default DestinationsPage;