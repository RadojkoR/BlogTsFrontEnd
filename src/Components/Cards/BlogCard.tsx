import { NavLink } from "react-router-dom";


function BlogCard() {
  return (
    <article className="w-container20 flex justify-center items-center mx-auto border-2 border-blue-300">
      <NavLink
        to={"/blogTitle"}
        className="max-w-sm rounded h-full flex flex-col justify-between items-center overflow-hidden shadow-lg border-2 border-gray-300"
        
      >
        <img className="w-full mb-10" src="#" alt="Europe image" />
        <h3 className="capitalize font-bold text-3xl pb-5">
          Blog Title
        </h3>
      </NavLink>
    </article>
  );
}

export default BlogCard