import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditUser() {
  let [message, setMessaage] = useState(false);

  let navigate = useNavigate();
  let { id } = useParams();

  let [editData, setEditData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setEditData(res.data));
  }, [id]);

  let editUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, editData)
      .then((res) => {
        setMessaage((prev) => !prev);
        setTimeout(() => {
          navigate("/");
        }, 1200);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Paper
        elevation={24}
        sx={{
          m: "10px auto",
          padding: 3,
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <form onSubmit={editUser}>
          <Typography variant="h5" mb={2} textAlign={"center"}>
            Edit User
          </Typography>

          <TextField
            required
            label="Name"
            fullWidth
            sx={{ mb: 2 }}
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            required
            label="User Name"
            fullWidth
            sx={{ mb: 2 }}
            value={editData.username}
            onChange={(e) =>
              setEditData({ ...editData, username: e.target.value })
            }
          />
          <TextField
            required
            label="Email"
            fullWidth
            sx={{ mb: 2 }}
            value={editData.email}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
          />
          <TextField
            required
            label="Phone"
            fullWidth
            sx={{ mb: 2 }}
            value={editData.phone}
            onChange={(e) =>
              setEditData({ ...editData, phone: e.target.value })
            }
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button type="sumbit">Update</Button>
            {message && (
              <Alert
                sx={{ m: "5px 20px" }}
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
              >
                User Updated
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
            borderBottomRightRadius: 15,
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: 22 }} />
        </Box>
      </Paper>
    </>
  );
}

export default EditUser;
