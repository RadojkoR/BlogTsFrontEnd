import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

interface Blog {
    blog_id: number;
    blog_img: string;
    blog_title: string;
    blog_text: string;
    continent_id: number;
    country_id: number;
    created_at: string;
}

interface BlogProps {
    blog: Blog;
    // index: number;
}

function BlogCard({blog}: BlogProps) {
    const blogTitle = blog.blog_title;
    const formattedBlogTitle = blogTitle.replace(/\s+(.)/g, (match, char) => char.toUpperCase())
                                        .replace(/^\w/, (char) => char.toLocaleLowerCase())
                                        .replace(/[.,'"::?!]/g, "");
  return (
    <article className="w-container20 flex justify-center items-center mx-auto border-2 border-blue-300">
      <NavLink
        to={formattedBlogTitle}
        className="max-w-sm rounded h-full flex flex-col justify-between items-center overflow-hidden shadow-lg border-2 border-gray-300"
      >
        <img className="w-full mb-10" src="#" alt="Europe image" />
        <h3 className="capitalize font-bold text-3xl pb-5">
          {blog.blog_title}
        </h3>
      </NavLink>
    </article>
  );
}

export default BlogCard