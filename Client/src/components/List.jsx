import React from "react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Card";

const List = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://asap-project.onrender.com/post")
      .then((data) => {
        // console.log(data.data)
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div style={{ paddingTop: "13vmax" }}>
        <Grid
          margin={"0vmax 6vmax 0vmax 6vmax"}
          templateColumns="repeat(3, 1fr)"
          gap={10}
         css={{
            "@media screen and (max-width: 426px)": {
              gridTemplateColumns: "1fr",
            },
          }} 
        >
          {posts.map((e, i) => {
            return <Cards data={posts[i]} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default List;
