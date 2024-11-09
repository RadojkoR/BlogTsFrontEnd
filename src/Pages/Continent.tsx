import { Header } from "../Components/Layout";
import { useLocation } from "react-router-dom";
import CountryCard from "../Components/Cards/CountryCard";
import { useCountries } from "../Hooks";


export default function Continent() {
  const { continentId, continentName } = useLocation().state || {};
  const formattedContinentName = continentName ? 
  continentName.charAt(0).toLocaleUpperCase() + continentName.slice(1) : "";
  const {countries} = useCountries();

  

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

