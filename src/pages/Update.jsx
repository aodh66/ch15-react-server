import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import { CarsContext } from "../components/contexts/car.context";

function Update() {
  const { id } = useParams();
  const { cars, updateCar } = useContext(CarsContext);

  const car = cars.find(({ _id }) => id === _id);
  // send car and handler to form
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2 }}>
        Update Car
      </Typography>
      <CarForm car={car} submitHandler={updateCar} />
    </>
  );
}

export default Update;
