import { isEmpty } from "lodash";
import React from "react";

function AddList({ register, handleSubmit, onSubmit, errors, message }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div>
          <input
            name="name"
            ref={register({ required: true })}
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
      {errors.element && (
        <div className="py-2 font-semibold text-red-400">
          Your input is required
        </div>
      )}
      {!isEmpty(message) && message.type === "error" ? (
        <div className="font-semibold text-red-500">{message.message}</div>
      ) : (
        <div className="font-semibold text-green-500">{message.message}</div>
      )}
    </form>
  );
}

export default AddList;
