import useBlogs from "../../Hooks/useBlogs";
import dayjs from "dayjs";


// interface BlogItem {
//   id: number;
//   title: string;
//   image?: File;
//   text: string;
//   date: string;
// }
function BlogItemCard() {
  const { blogs } = useBlogs();
  console.log(blogs);

  // Sort the blogs by created_at in descending order
  const sortedBlogs = blogs.sort((a, b) => {
    return dayjs(b.created_at).isAfter(dayjs(a.created_at)) ? 1 : -1;
  });

  return (
    <section className="flex gap-6 flex-wrap justify-center">
      {sortedBlogs.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between h-64 w-25rem border-2 mb-10"
        >
          <div className="flex flex-col items-center px-5">
            <h2 className="text-2xl text-center py-5">{item.title}</h2>
            <p className="">{item.content}</p>
          </div>

          <div className="p-4">
            <p>{dayjs(item.created_at).format("YYYY-MM-DD HH:mm")}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BlogItemCard