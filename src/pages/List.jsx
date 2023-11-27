import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { CarsContext } from "../components/contexts/car.context";
// import { UIContext } from "./../components/contexts/UI.context";

import CarsList from "../components/CarsList";

function CarsListPage() {
  const { cars, fetchCars, deleteCar, loading, error } =
    useContext(CarsContext);
  // const { showMessage } = useContext(UIContext);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const deleteHandler = (id) => {
    deleteCar(id);
  };

  let callStatusComponent = null;

  if (loading) {
    callStatusComponent = <CircularProgress />;
  } else if (error) {
    callStatusComponent = <p>{error}: Loading from localStorage</p>;
  } else if (cars.length === 0) {
    callStatusComponent = <p>No cars to display</p>;
  }

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      {callStatusComponent}
      {/* <Button
        onClick={() =>
          showMessage({
            type: "warning",
            string: "This is a warning",
          })
        }
      >
        Show Message
      </Button> */}
      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  );
}

export default CarsListPage;
