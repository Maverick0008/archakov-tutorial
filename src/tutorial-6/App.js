import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Comments } from "./components/Comments";
import Form from "./components/Form";
const App = () => {
  const [comments, setComments] = useState([]);
  const onButtonSubmit = (comment) => {
    setComments((prev) => [...prev, comment]);
  };
  const removeItem = (index) => {
    setComments(comments.filter((_,i) => i !== index));
  };
  useEffect(() => {
    setComments([...JSON.parse(localStorage.getItem("comments"))]);
  }, []);
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          sx={{
            p: "16px",
            border: "1px solid #F0F0F0",
            borderRadius: "3px",
            marginTop: "30px",
            width: "365px",
          }}
        >
          <Typography variant="h6" component="h6" color="#5C5B5C">
            Отзывы:
          </Typography>

          {comments.map((value, index) => (
            <Comments
              removeItem={removeItem}
              key={index}
              index={index}
              fullName={value.fullName}
              text={value.text}
              data={value.createAt}
            />
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Form onButtonSubmit={onButtonSubmit} />
      </Grid>
    </>
  );
};

export default App;
