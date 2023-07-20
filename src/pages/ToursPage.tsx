  import AllTours from "@/components/AllTours/AllTours";
import Filter from "@/components/Filter Block/Filter";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React,{useState,useEffect} from "react";
import Main from "@/components/MainBlock/Main";
import { ToursMain } from "@/constants/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ToursPage: React.FC = () => {
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
      <Main array={ToursMain} />
      <Filter/>
      <AllTours/>
      <Footer />     
    </>
  );
};

export default ToursPage;
