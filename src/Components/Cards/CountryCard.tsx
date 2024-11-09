import { NavLink } from "react-router-dom";


interface Country {
  country_id: number;
  country_name: string;
  country_img?: string | undefined;
  continent_id: number;
}

interface CountryProps {
  country: Country;
  index: number;
}

function CountryCard({ country, index }: CountryProps) {
   const countryName = country.country_name;
   const countryImg = country.country_img;
   const countryId = country.country_id;
   const formattedCountryName = countryName.replace(/\s+/g, "");

  return (
    <article className="w-container20 flex justify-center items-center mx-auto border-2 border-blue-300">
      <NavLink
        to={`${formattedCountryName}`}
        className="max-w-sm rounded h-full flex flex-col justify-between items-center overflow-hidden shadow-lg border-2 border-gray-300"
        key={index}
        state={{countryName, countryId}}
      >
        <img
          className="w-full mb-10"
          src={`http://192.168.0.114:3001${countryImg}`}
          alt={`${countryName} image`}
        />
        <h3 className="capitalize font-bold text-3xl pb-5">
          {countryName.toUpperCase()}
        </h3>
      </NavLink>
    </article>
  );
}

export default CountryCard