import { Header } from "../Components/Layout";
import { useParams } from "react-router-dom";


function Country() {
    const { countryName, countryId } = useParams<{ countryName: string | undefined; countryId: string | undefined }>();
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
      <h1 className="my-20 text-center text-5xl">{countryName.toLocaleUpperCase()}</h1>
    </>
  );
}

export default Country