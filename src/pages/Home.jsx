import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../components/Tables";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Home() {
  let navigate = useNavigate();

  let [userData, SetUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => SetUserData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Typography variant="h5" textAlign={"center"}>
        CRUD APP
      </Typography>
      <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
        <Button onClick={() => navigate(`/createuser`)}>Create User</Button>
      </Box>
      <Tables users={userData} />
    </>
  );
}

export default Home;
