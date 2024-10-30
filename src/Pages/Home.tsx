import BlogItemCard from "../Components/Blog/BlogItemCard";
import { Header } from "../Components/Layout";



function Home() {

  return (
    <>
      <Header className="bg-bgHeaderHome" title="Travels With Drea" />
      <h1 className="my-20 text-center text-5xl font-bold">
        Latest from the Blog
      </h1>
      <section className="w-container80 mx-auto">
        <BlogItemCard />
      </section>
    </>
  );
}

export default Home