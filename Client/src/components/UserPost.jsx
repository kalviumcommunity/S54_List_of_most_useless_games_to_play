import React, { useEffect, useState } from "react";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import Cards from "./Card";

const UserPosts = () => {
  let { user } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://asap-project.onrender.com/post/user/${user}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error(
            "No posts associated with this user found... Redirecting..!",
            {
              autoClose: 2000000,
              position: "top-center",
            }
          );
          setTimeout(() => {
            navigate("/user");
          }, 3000);
        }
      });
  }, [user, navigate]);

  return (
    <div id="listings-parent">
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
          {data.map((post, i) => {
            return <Cards data={post} key={i} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default UserPosts;
