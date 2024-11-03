import { Header } from "../Components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CountryCard from "../Components/Cards/CountryCard";

interface Country {
  country_id: number;
  country_name: string;
  country_img: string;
  continent_id: number;
}



export default function Continent() {
  const { continentName, continentId } = useParams<{ continentName: string | undefined; continentId: string | undefined }>();
  const formattedContinentName = continentName ? 
  continentName.charAt(0).toLocaleUpperCase() + continentName.slice(1) : "";

  const [countries, setCountries] = useState<Country[]>([]);
  // const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async() => {
      if(continentName){
        try{
          const response = await axios.get(`http://129.153.55.190:3001/countries`)
          setCountries(response.data)
          
        }catch(error){
          console.error("Error fetching countries:", error);
          
        }
        // finally{
        //   setLoading(true)
        // }
      }
    };
    fetchCountries()
  }, [continentName])

  return (
    <>
      <Header
        className="bg-bgHeaderBlog h-screen bg-contain bg-center"
        title={formattedContinentName!}
      />
      <h1 className="my-20 text-center text-5xl">{formattedContinentName}</h1>
      <section className="w-container80 flex justify-between mx-auto mb-10">
        {countries.length > 0 ? (
          countries
            .filter((country) => country.continent_id === Number(continentId))
            .map((country, index) => (
              <CountryCard key={index} country={country} index={index} />
            ))
        ) : (
          <h1>No data available</h1>
        )}
      </section>
      <h1 className="my-20 text-center text-5xl">{continentId}</h1>
    </>
  );
}

