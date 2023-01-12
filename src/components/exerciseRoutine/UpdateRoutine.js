import { useLazyQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { validateSDL } from "graphql/validation/validate";
import {useEffect, useState} from "react";
import {CREATE_EXE_ROUTINE, UPDATE_EXE_ROUTINE} from "../../gql/exeRoutine";

const UpdateRoutine = ({ handleClose, routineAlert, value }) => {
  const [values, setValues] = useState({
    exercise_routine_name: "",
    day_1: "",
    day_2: "",
    day_3: "",
    day_4: "",
    day_5: "",
    day_6: "",
    day_7: "",
  });
  const [errors, setErrors] = useState({
    exercise_routine_name: "",
    day_1: "",
    day_2: "",
    day_3: "",
    day_4: "",
    day_5: "",
    day_6: "",
    day_7: "",
  });
  const [loading, setLoading] = useState(false);

  const [updateRoutine] = useMutation(UPDATE_EXE_ROUTINE, {
      onError: (error) => {
          console.log("error:", error);
          setLoading(false);
      },
      onCompleted: (data) => {
          setValues({
              exercise_routine_name: "",
              day_1: "",
              day_2: "",
              day_3: "",
              day_4: "",
              day_5: "",
              day_6: "",
              day_7: "",
          });
          setErrors({
              exercise_routine_name: "",
              day_1: "",
              day_2: "",
              day_3: "",
              day_4: "",
              day_5: "",
              day_6: "",
              day_7: "",
          });
          setLoading(false);
          routineAlert("Routine has been updated");
          handleUpdateClose();
      }
  })

  useEffect(() => {
      setValues(value);
  }, [value])

    console.log(values);

    const handleUpdateClose = () => {
      setValues({});
      setErrors({
            exercise_routine_name: "",
            day_1: "",
            day_2: "",
            day_3: "",
            day_4: "",
            day_5: "",
            day_6: "",
            day_7: "",
        });
      handleClose();
    }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCreate = () => {
      setLoading(true);
      setErrors({
          exercise_routine_name: "",
          day_1: "",
          day_2: "",
          day_3: "",
          day_4: "",
          day_5: "",
          day_6: "",
          day_7: "",
      });

      let isErrorExit = false;
      let errorObject = {};

      if(!values.exercise_routine_name){
          errorObject.exercise_routine_name = "Routine Name is required";
          isErrorExit = true;
      }
      if(!values.day_1){
          errorObject.day_1 = "Day 1 is required";
          isErrorExit = true;
      }
      if(!values.day_2){
          errorObject.day_2 = "Day 2 is required";
          isErrorExit = true;
      }
      if(!values.day_3){
          errorObject.day_3 = "Day 3 is required";
          isErrorExit = true;
      }
      if(!values.day_4){
          errorObject.day_4 = "Day 4 is required";
          isErrorExit = true;
      }
      if(!values.day_5){
          errorObject.day_5 = "Day 5 is required";
          isErrorExit = true;
      }
      if(!values.day_6){
          errorObject.day_6 = "Day 6 is required";
          isErrorExit = true;
      }
      if(!values.day_7){
          errorObject.day_7= "Day 7 is required";
          isErrorExit = true;
      }

      if(isErrorExit){
          setErrors(errorObject);
          setLoading(false);
          return;
      }
      try{
          console.log(values);
          updateRoutine({ variables: {...values}});
      }catch (e) {
          console.log("error:", e.message);
      }
  }

    return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          maxWidth: 820,
          bgcolor: "#cecece",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          py: 2,
        }}
      >
        <Typography variant="h5" component="h2" color="black" sx={{ mx: 4 }}>
          Update Routine
        </Typography>
        <Button
          onClick={handleUpdateClose}
          variant="contained"
          color="error"
          sx={{ mx: 4 }}
        >
          Close
        </Button>
      </Box>
      <Card
        sx={{
          display: "flex",
          justifyContent: "flex-start",

          bgcolor: "white",
          maxWidth: 820,
          borderRadius: 0,
          height: 500,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <CardContent sx={{ my: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 330,
              ml: 5,
            }}
          >
            <TextField
              id="exercise_routine_name"
              label="exercise_routine_name"
              sx={{ my: 2 }}
              value={values.exercise_routine_name}
              onChange={handleChange("exercise_routine_name")}
              error={errors.exercise_routine_name ? true : false}
              helperText={errors.exercise_routine_name}
            />

            <TextField
              id="day_1"
              label="day_1"
              sx={{ my: 2 }}
              value={values.day_1}
              onChange={handleChange("day_1")}
              error={errors.day_1 ? true : false}
              helperText={errors.day_1}
            />
            <TextField
              id="day_2"
              label="day_2"
              sx={{ my: 2 }}
              value={values.day_2}
              onChange={handleChange("day_2")}
              error={errors.day_2 ? true : false}
              helperText={errors.day_2}
            />
            <TextField
              id="day_3"
              label="day_3"
              sx={{ my: 2 }}
              value={values.day_3}
              onChange={handleChange("day_3")}
              error={errors.day_3 ? true : false}
              helperText={errors.day_3}
            />
          </Box>
          <LoadingButton
            variant="contained"
            //color="warning"
            size="large"
            sx={{ maxWidth: 100, mt: "1rem", left: "90%", height: 60 }}
            loading={loading}
            onClick={handleCreate}
          >
            Update
          </LoadingButton>
        </CardContent>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mx: 2,
              mr: 4,
              my: 4,
              minWidth: 330,
            }}
          >
            <TextField
              id="day_4"
              label="day_4"
              sx={{ my: 2 }}
              value={values.day_4}
              onChange={handleChange("day_4")}
              error={errors.day_4 ? true : false}
              helperText={errors.day_4}
            />
            <TextField
              id="day_5"
              label="day_5"
              sx={{ my: 2 }}
              value={values.day_5}
              onChange={handleChange("day_5")}
              error={errors.day_5 ? true : false}
              helperText={errors.day_5}
            />
            <TextField
              id="day_6"
              label="day_6"
              sx={{ my: 2 }}
              value={values.day_6}
              onChange={handleChange("day_6")}
              error={errors.day_6 ? true : false}
              helperText={errors.day_6}
            />
            <TextField
              id="day_7"
              label="day_7"
              sx={{ my: 2 }}
              value={values.day_7}
              onChange={handleChange("day_7")}
              error={errors.day_7 ? true : false}
              helperText={errors.day_7}
            />
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default UpdateRoutine;
