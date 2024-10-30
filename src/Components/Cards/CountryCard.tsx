import { NavLink } from "react-router-dom";


interface Country {
    country_id: number;
    country_name: string;
    country_img: string;
    continent_id: number;
}

interface CountryProps {
  country: Country;
  index: number;
}

function CountryCard({ country, index }: CountryProps) {
    console.log("country image", country.country_img);
    
  return (
     <article className="w-container20 flex justify-center items-center mx-auto border-2 border-blue-300">
      <NavLink
        to={country.country_name}
        className="max-w-sm rounded h-full flex flex-col justify-between items-center overflow-hidden shadow-lg border-2 border-gray-300"
        key={index}
      >
        <img className="w-full mb-10" src={country.country_img} alt="Europe image" />
        <h3 className="capitalize font-bold text-3xl pb-5">
          {country.country_name.toUpperCase()}
        </h3>
      </NavLink>
    </article>
  );
}

export default CountryCard