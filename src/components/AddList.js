import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddList() {
  const { register, handleSubmit, errors } = useForm();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const onSubmit = (data, e) => {
    if (_.find(elementList, { name: data.name })) {
      Swal.fire({
        title: "Error",
        text: "Post already exists",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Success",
        text: "Post successfully added",
        icon: "success",
      }).then((willAdd) => {
        if (willAdd) {
          setElementList([
            ...elementList,
            { id: elementList.length + 1, name: data.name, date: date },
          ]);
        }
      });
    }
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div>
          <input
            name="name"
            ref={register({ required: true, minLength: 5 })}
            className="px-2 py-2 mr-4 border-2 border-black focus:outline-none"
            placeholder="insert list element"
          />
        </div>
        <div>
          <textarea
            name="description"
            ref={register({ required: true, minLength: 5 })}
            className="px-2 py-2 mr-4 border-2 border-black focus:outline-none"
            placeholder="insert list element"
          ></textarea>
        </div>
        <div className="border-2 border-black">
          <button type="submit" className="px-6 py-2 focus:outline-none">
            Add
          </button>
        </div>
      </div>
      {errors.name?.type === "required" && (
        <div className="py-2 font-semibold text-red-400">
          Post is required
        </div>
      )}
      {errors.name?.type === "required" && (
        <div className="py-2 font-semibold text-red-400">
          Description is required
        </div>
      )}
      {errors.name?.type === "minLength" && (
        <div className="py-2 font-semibold text-red-400">
          Minimum of 5 characters
        </div>
      )}
    </form>
  );
}

export default AddList;
