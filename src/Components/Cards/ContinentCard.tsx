
import { NavLink } from "react-router-dom";

interface Continent {
  continent_name: string;
  continent_img: string;
  continent_id: number;
}

interface Props {
  continent: Continent;
  index: number;
}

function ContinentCard({ continent, index}: Props) {
const continentName = continent.continent_name;
const continentImg = continent.continent_img;
const continentId = continent.continent_id;
const formattedContinentName = continentName.replace(/\s+/g,'');

  return (
    <article className="w-container20 flex justify-center items-center mx-auto border-2 border-blue-300">
      <NavLink
        to={`${formattedContinentName}`}
        className="max-w-sm rounded h-full flex flex-col justify-between items-center overflow-hidden shadow-lg border-2 border-gray-300"
        key={index}
        state={{continentId, continentName}}
      >
        <img className="w-full mb-10" src={`http://192.168.0.114:3001${continentImg}`} alt={`${continentName} image`} />
        <h3 className="capitalize font-bold text-3xl pb-5">
          {continentName.toUpperCase()}
        </h3>
      </NavLink>
    </article>
  );
}

export default ContinentCard;
