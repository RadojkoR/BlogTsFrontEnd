import BlogCard from "../Components/Cards/BlogCard";
import { Header } from "../Components/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  blog_id: number;
  blog_title: string;
  blog_img: string;
  continent_id: number;
  country_id: number;
  blog_text: string;
  created_at: string;
}

function Country() {
  const { countryName, countryId } = useParams<{
    countryName: string | undefined;
    countryId: string | undefined;
  }>();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://132.145.97.119:3001/blogs");
        console.log("blogs data", response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching Blogs Data");
      }
    };
    fetchBlogs();
  }, []);

  if (!countryName) {
    return <div>No country specified</div>;
  }

  return (
    <>
      <Header
        className="bg-bgHeaderBlog bg-contain bg-center"
        title={countryName.toLocaleUpperCase()}
      />
      <h2 className="my-20 text-center text-5xl">{countryId}</h2>
      <h1 className="my-20 text-center text-5xl">
        {countryName.toLocaleUpperCase()}
      </h1>

      {blogs.length >
        0 ?(
          blogs.filter((blog)=>blog.country_id === Number(countryId)).map((blog, index) => (
            // <h1>{blog.blog_title}</h1>
            <BlogCard key={index} blog={blog} />
          ))
        ) : (
          <h1>No data available</h1>
        )}
    </>
  );
}

export default Country