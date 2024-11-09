import useBlogs from "../../Hooks/useBlogs";


// interface BlogItem {
//   id: number;
//   title: string;
//   image?: File;
//   text: string;
//   date: string;
// }
function BlogItemCard() {
 const {blogs} = useBlogs()
 console.log(blogs);
 
    return (
      <section className="flex gap-6 flex-wrap justify-center">
        {blogs.map((item, index) => (
          <div key={index} className="flex flex-col justify-between h-64 w-25rem border-2 mb-10">
            <div className="flex flex-col items-center px-5">
                <h2 className="text-2xl text-center py-5">{item.title}</h2>
                <p className="">{item.content}</p>
            </div>
            
            <div className="p-5">
              <p>{item.created_at}</p>
            </div>
          </div>
        ))}
      </section>
    );
}

export default BlogItemCard