import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import axios from "axios"
import './Form.css'

export default function NewPostForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const FormSubmitHandler = (data)=>{
    axios.post("https://asap-project.onrender.com/post/",data).then(()=>{
      console.log("ADDED")
      navigate("/list")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax">New Post</Text>
        <Text as="i" fontSize="1vmax">Enter the following details!</Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Username</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("user", {
              required: "Username is required"
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>  
        <FormControl>

          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Title</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("title", {
              required: "Title is required"
            })}
          />
          <p className="err">{errors.user?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Image Link</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("image", {
              required: "Image link is required"
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        
        <Button type="submit" colorScheme="red">Submit</Button>
      </form>
    </div>
  );
}