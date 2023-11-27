import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import { CarsContext } from "../components/contexts/car.context";

function Add() {
  const { addCar } = useContext(CarsContext);
  const navigate = useNavigate();

  const submitHandler = (data) => {
    addCar(data);
    navigate("/");
  };
  return (
    <>
      <Typography variant="h2" component="h1">
        Add Car
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
