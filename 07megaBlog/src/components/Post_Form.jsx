import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
function PostForm() {
  const { handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit()} className="w-full">
      <div className="w-1/2">
        <Input />
        <Input />
      </div>
      <div className="w-1/2">
        <Input />
        <Input/>
      </div>
    </form>
  );
}

export default PostForm;
