import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import Hero from "../components/Hero";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MainPage;
