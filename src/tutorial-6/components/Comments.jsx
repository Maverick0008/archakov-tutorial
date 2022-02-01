import React from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
export const Comments = ({ fullName, text, index, removeItem }) => {
  return (
    <>
      <Grid
        flexWrap="noWrap"
        alignItems="center"
        container
        sx={{ marginBottom: "10px", p: "15px" }}
      >
        <Grid
          sx={{
            marginRight: "10px",
          }}
        >
          <Avatar alt="Avatar" sx={{ width: 50, height: 50 }}>
            logo
          </Avatar>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Typography variant="h5" component="h5" color="#5d5549" fontSize={18}>
            {fullName}
          </Typography>
          <Typography sx={{ color: "#bcbabb" }} fontSize={14}>
            {text}
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <DeleteIcon onClick={() => removeItem(index)} />
        </Grid>
      </Grid>
    </>
  );
};
