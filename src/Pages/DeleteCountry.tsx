import { useState } from "react";
import Buttons from "../Components/Buttons/Buttons";
import { useCountries } from "../Hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DeleteCountry() {
    // uvesti sve drzave da ih vidim u frontu
    const {countries} = useCountries();
    const [selectedCountryId, SetSelectedCountryId] = useState<number | null>(null);
    const navigate = useNavigate();
    //uzeti id od drzave koju odaberemo
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
         SetSelectedCountryId(Number(e.target.selectedOptions[0].getAttribute('data-country-id')));        
    }
    // obrisati drzavu
    const handleDeleteCountry = async (e: React.MouseEvent<HTMLAnchorElement>) => {
       e.preventDefault()
        try{
            await axios.delete(`http://192.168.0.114:3001/countries/${selectedCountryId}`);
            alert("Country deleted successfully!!!")
        }catch(error){
            console.error("Error deleting Country", error);
            alert("Filed to delete Country");
            
        }
        navigate("/createBlog");
        
    }


  return (
    <div className="w-container80 mx-auto my-24">
      <h2 className="text-center my-5 text-5xl">Delete Country</h2>
      <form className="w-100 flex">
        <section className="flex flex-col w-2/4 px-2">
          <label htmlFor="selectCountry" className="text-xl mb-2 text-gray-800">
            Select a Country *
          </label>
          <select
            name="selectCountry"
            id="selectCountry"
            className="p-2 text-lg"
            onChange={handleCountryChange}
          >
            <option value="Select Country">Selct Country</option>
            {
                countries.map((country, index) => (
                    <option key={index} value={country.country_name} data-country-id={country.country_id}>{country.country_name}</option>
                ))
            }
          </select>
        </section>
        <section className="flex flex-col items-center justify-end w-2/4 px-2">
          <Buttons
            toLink="/createBlog"
            title={"Delete"}
            classes={
              "w-24 flex justify-center border-solid border-2 bg-red-900 text-white border-red-900 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-red-900 hover:bg-inherit hover:text-red-900 ms-2"
            }
            onClick={handleDeleteCountry}
          />
        </section>
      </form>
    </div>
  );
}

export default DeleteCountry