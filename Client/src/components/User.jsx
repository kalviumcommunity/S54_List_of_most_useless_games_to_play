import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

export default function User() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://asap-project.onrender.com/users")
      .then((res) => {
        //   console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userClick = (username) => {
    navigate(`/post/${username}`);
  };

  return (
    <div className="users-parent">
      <Text style={{ color: "white", fontSize: "25px" }} className="allUser">
        All Users
      </Text>
      <UnorderedList className="users">
        {data.map((e, i) => {
          return (
            <ListItem
              fontSize="1.5vmax"
              key={i}
              onClick={() => {
                userClick(e.username);
              }}
              cursor="pointer"
              color="white"
            >
              {e.username}
            </ListItem>
          );
        })}
      </UnorderedList>
    </div>
  );
}
