import Buttons from "../Components/Buttons/Buttons";
import { useContinents } from "../Hooks";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function DeleteContinent() {
  const {continents} = useContinents();
  const [selectedContinentId, setSelectedContinentId] = useState<number | null>(null);
  const navigate = useNavigate()

  const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const continentIdSel = Number(e.target.selectedOptions[0].getAttribute("data-continent-id"));
    console.log("Selected Continent ID: ", continentIdSel);
    setSelectedContinentId(continentIdSel)
  }

  const handleDeleteContinent = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if(selectedContinentId === null) {
      console.error("No Continent selected");
      return;
      
    }

    try{
      const response = await axios.delete(`http://192.168.0.114:3001/continents/${selectedContinentId}`);
      console.log(response.data);
      alert("Continent deleted successfully!!!")
      
    }catch(error){
      console.error("Error deleting continent", error);
      alert("Filed to delete continent");
      
    }
    navigate("/createBlog")

  }

  return (
    <div className="w-container80 mx-auto my-24">
      <h2 className="text-center my-5 text-5xl">Delete Continent</h2>
      <form className="w-100 flex">
        <section
          className="flex flex-col w-2/4 px-2"
          onChange={handleContinentChange}
        >
          <label
            htmlFor="selectContinent"
            className="text-xl mb-2 text-gray-800"
          >
            Select a Continent *
          </label>
          <select
            name="selectContinent"
            id="selectContinent"
            className="p-2 text-lg"
          >
            <option value="select continent"> Select Continent</option>
            {continents.map((continent, index) => (
              <option
                key={index}
                value={continent.continent_name}
                data-continent-id={continent.continent_id}
              >
                {continent.continent_name}
              </option>
            ))}
          </select>
        </section>
        <section className="flex flex-col items-center justify-end w-2/4 px-2">
          <Buttons
            toLink="/createBlog"
            title={"Delete"}
            classes={
              "w-24 flex justify-center border-solid border-2 bg-red-900 text-white border-red-900 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-red-900 hover:bg-inherit hover:text-red-900 ms-2"
            }
            onClick={handleDeleteContinent}
          />
        </section>
      </form>
    </div>
  );
}

export default DeleteContinent