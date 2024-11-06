import { useEffect, useState } from "react";
import axios from "axios";
import ContinentCard from "../Components/Cards/ContinentCard";
import { Header } from "../Components/Layout";


function Destinations() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.0.112:3001");
        setData(response.data.continentsData);
      } catch (error) {
        console.error("Error fetching data:");
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header className="bg-bgHeaderDestination h-screen" title="Destination" />
      <h1 className="my-20 text-center text-5xl">Destinations</h1>
      <section className="w-container80 flex justify-between mx-auto mb-10">
        {data.length > 0 ? (
          data.map((continent, index) => (
            <ContinentCard key={index} continent={continent} index={index} />
          ))
        ) : (
          <h1 className="my-20 text-center text-5xl">No data available</h1>
        )}
      </section>
    </>
  );
}

export default Destinations;
