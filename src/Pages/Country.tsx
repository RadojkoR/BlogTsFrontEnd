import BlogCard from "../Components/Cards/BlogCard";
import { Header } from "../Components/Layout";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  post_id: number;
  title: string;
  blog_img: string;
  continent_id: number;
  country_id: number;
  blog_text: string;
  created_at: string;
}

function Country() {
  const {countryName, countryId} = useLocation().state || {}
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://192.168.0.113:3001/blogs");
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
        className={`bg-${countryName}HeaderBlog bg-contain bg-center h-70vh`}
        title={countryName.toLocaleUpperCase()}
      />
      <h1 className="my-20 text-center text-5xl">
        {countryName.toLocaleUpperCase()}
      </h1>
      <section className="w-container80 flex justify-between mx-auto mb-10">
        {blogs.length > 0 ? (
          blogs
            .filter((blog) => blog.country_id === Number(countryId))
            .map((blog, index) => (
              // <h1>{blog.blog_title}</h1>
              <BlogCard key={index} blog={blog} />
            ))
        ) : (
          <h1>No data available</h1>
        )}
      </section>
    </>
  );
}

export default Country