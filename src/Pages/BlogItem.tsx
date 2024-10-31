import axios from "axios";
import { Header } from "../Components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Blog {
  blog_id: number;
  blog_title: string;
  blog_img: string;
  continent_id: number;
  country_id: number;
  blog_text: string;
  created_at: string;
}

// interface ParamsData {
//   blogTitle: string | undefined;
//   continentId: string | undefined;
//   countryId: string | undefined;
// }

function BlogItem() {
const { blogTitle, continentId, countryId } = useParams<{
  blogTitle: string | undefined;
  continentId: string | undefined;
  countryId: string | undefined;
}>();

const formattedContinentId = Number(continentId);
const formattedContryId = Number(countryId);
console.log(formattedContinentId);


const [blogs, setBlogs] = useState<Blog[]>([]);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://132.145.97.119:3001/blogs");
      console.log("blogsItem data", response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching Blogs Data");
    }
  };
  fetchBlogs();
}, []);

if (!blogTitle) {
  return <div>No country specified</div>;
}

  return (
    <>
      <Header
        className="bg-bgHeaderBlog bg-contain bg-center"
        title={blogTitle.toLocaleUpperCase()}
      />
      {/* <h2 className="my-20 text-center text-5xl">{blog_Id}</h2> */}

      {blogs.length > 0 ? (
        blogs
          .filter(
            (blog) =>
              formattedContinentId == blog.continent_id &&
              formattedContryId == blog.country_id
          )
          .map((blog, index) => (
            <div>
              <h1 key={index} className="my-20 text-center text-5xl">
                {/* {blog.blog_title.toLocaleUpperCase()} */}
                {blog.blog_title}
              </h1>
              <section className="w-container80 mx-auto">
                <p className="text-xl">{blog.blog_text}</p>
              </section>
            </div>
          ))
      ) : (
        <h1 className="my-20 text-center text-5xl">No Data available</h1>
      )}
    </>
  );
}

export default BlogItem