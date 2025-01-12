import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  post_id: number;
  title: string;
  continent_id: number;
  country_id: number;
  content: string;
  created_at: string;
}

function useBlogs() {
 const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://192.168.0.113:3001/blogs");
      console.log("blogsItem data", response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching Blogs Data");
    }
  };
  fetchBlogs();
}, []);
return{blogs}
}

export default useBlogs