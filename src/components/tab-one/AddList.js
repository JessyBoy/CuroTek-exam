import React from "react";

function AddList({ register, handleSubmit, onSubmit, errors }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div>
          <input
            name="name"
            ref={register({ required: true, minLength: 5 })}
            className="px-2 py-2 mr-4 border-2 border-black focus:outline-none"
            placeholder="insert list element"
          />
        </div>
        <div className="border-2 border-black">
          <button type="submit" className="px-6 py-2 focus:outline-none">
            Add
          </button>
        </div>
      </div>
      {errors.name?.type === "required" && (
        <div className="py-2 font-semibold text-red-400">
          Element is required
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
