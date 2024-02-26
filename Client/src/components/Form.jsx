import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import { getCookie } from "./../utils/cookie";
export default function NewPostForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const username = getCookie("username");
  useEffect(() => {
    register("user", { value: username });
  }, [register, username]);
  const token = getCookie("auth-token");

  const FormSubmitHandler = (formData) => {
    axios
      .post("https://asap-project.onrender.com/post", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        console.log("ADDED");
        navigate("/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(watch())
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax">
          New Post
        </Text>
        <Text as="i" fontSize="1vmax">
          Enter the following details!
        </Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Username
          </FormLabel>
          <Input
            isDisabled
            type="text"
            borderColor="black"
            defaultValue={username} // Use defaultValue instead of register for disabled input
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>

        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Title
          </FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("title", {
              required: "Title is required",
            })}
          />
          <p className="err">{errors.user?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Image Link
          </FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("image", {
              required: "Image link is required",
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        {/* Add other form controls for title and image link here */}
        <Button type="submit" colorScheme="red">
          Submit
        </Button>
      </form>
    </div>
  );
}
