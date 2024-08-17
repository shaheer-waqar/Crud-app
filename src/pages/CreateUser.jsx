import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CreateUser() {
  let navigate = useNavigate();
  let [creatUserData, setCreatUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  let [message, setMessaage] = useState(false);
  let addUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/", creatUserData)
      .then((res) => setMessaage(true))
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <>
      <Paper
        elevation={24}
        sx={{
          maxWidth: "400px",
          m: "60px auto",
          padding: 3,
          position: "relative",
        }}
      >
        <form onSubmit={addUser}>
          <Typography variant="h5" mb={2} textAlign={"center"}>
            Create User
          </Typography>

          <TextField
            required
            label="Name"
            fullWidth
            sx={{ mb: 2 }}
            value={creatUserData.name}
            onChange={(e) =>
              setCreatUserData({ ...creatUserData, name: e.target.value })
            }
          />
          <TextField
            required
            label="User Name"
            fullWidth
            sx={{ mb: 2 }}
            value={creatUserData.username}
            onChange={(e) =>
              setCreatUserData({ ...creatUserData, username: e.target.value })
            }
          />
          <TextField
            required
            label="Email"
            fullWidth
            sx={{ mb: 2 }}
            value={creatUserData.email}
            onChange={(e) =>
              setCreatUserData({ ...creatUserData, email: e.target.value })
            }
          />
          <TextField
            required
            label="Phone"
            fullWidth
            sx={{ mb: 2 }}
            value={creatUserData.phone}
            onChange={(e) =>
              setCreatUserData({ ...creatUserData, phone: e.target.value })
            }
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button type="sumbit">Create</Button>
            {message && (
              <Alert
                sx={{ m: "5px 20px" }}
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
              >
                User Created
              </Alert>
            )}
          </Box>
        </form>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "black",
            borderBottomRightRadius:15,
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon sx={{ color: "white" ,fontSize:22}} />
        </Box>
      </Paper>
    </>
  );
}

export default CreateUser;
