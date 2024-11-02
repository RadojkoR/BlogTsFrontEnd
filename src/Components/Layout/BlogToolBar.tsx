import { Link } from "react-router-dom";



function BlogToolBar() {
  return (
    <div className="mt-24 w-full py-3 flex justify-center border-solid border-2 border-sky-500">
      <Link
        to={"/createBlog"}
        className="border-solid border border-sky-500 py-2 px-3 text-sky-500 transition duration-300 ease-in-out focus: outline-none focus:shadow-outline hover:bg-sky-500 hover:text-white"
      >
        Create New Blog
      </Link>
    </div>
  );
}

export default BlogToolBar