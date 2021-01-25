import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { editPost } from "../redux/ducks/posts";

function EditList({ match }) {
  const { id } = match.params;
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();

  const selectedPost = useSelector((state) => state.post.selectedPost);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(editPost(data, id));
    Swal.fire({
      title: "Success",
      text: "Post successfully edited",
      icon: "success",
    }).then((willAdd) => {
      if (willAdd) {
        history.push("/");
      }
    });
  };
  console.log("selectedPost", selectedPost);

  return (
    <>
      <div className="my-8 border-2 border-black">
        <p className="w-full p-5 text-2xl text-center">Edit Post</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="pb-4">
            <div className="text-xl font-semibold">Post Title:</div>
            <div>
              <input
                name="name"
                defaultValue={selectedPost.name}
                ref={register({ required: true, minLength: 5 })}
                className="px-2 py-2 mr-4 border border-black focus:outline-none"
                placeholder="Post Title..."
              />
            </div>
            {errors.name?.type === "required" && (
              <div className="py-2 font-semibold text-red-400">
                Post is required
              </div>
            )}
          </div>

          <div className="pb-4">
            <div className="text-xl font-semibold">Post Content:</div>
            <div>
              <textarea
                name="description"
                defaultValue={selectedPost.description}
                ref={register({ required: true, minLength: 5 })}
                className="w-full px-2 py-2 mr-4 border border-black focus:outline-none"
                placeholder="Post Content"
              ></textarea>
            </div>
            {errors.name?.type === "required" && (
              <div className="py-2 font-semibold text-red-400">
                Description is required
              </div>
            )}
          </div>

          <div className="flex">
            <div className="w-1/5 mr-2 duration-200 ease-in transform border-2 border-black hover:bg-green-400 hover:text-white hover:border-green-400">
              <Link to="/">
                <button
                  type="submit"
                  className="w-full py-2 text-xl font-semibold focus:outline-none"
                >
                  <i className="fa fa-sign-out"></i>Back to Post
                </button>
              </Link>
            </div>
            <div className="w-1/5 duration-200 ease-in transform border-2 border-black hover:bg-green-400 hover:text-white hover:border-green-400">
              <button
                type="submit"
                className="w-full py-2 text-xl font-semibold focus:outline-none"
              >
                <i className="fa fa-edit"></i>Edit Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditList;
