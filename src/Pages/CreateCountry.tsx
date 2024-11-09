import axios from "axios";
import { useState } from "react";
import { useContinents } from "../Hooks";




function CreateCountry() {
  const [selContinentId, setSelContinentId] = useState("");
  const [countryName, setCountryName] = useState('');
  const [countryImgFile, SetCountryImgFile] = useState<File | undefined>();
  const {continents} = useContinents();

  const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const continentId = e.target.selectedOptions[0].getAttribute("continent-id");
    
     if (continentId) {
      console.log("continent id: ", continentId);
      
       setSelContinentId(continentId);
     } else {
      console.error("No Continent selected");
     }
    
  };




const handleSubmitNewCountry = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("selected continent id: ", selContinentId);


  if (selContinentId === null || selContinentId === undefined) {
    alert("Continent ID is required");
    return;
  }
  if (!countryName) {
    alert("Country Name is required");
    return;
  }
  if (!countryImgFile) {
    alert("Country Image is required");
    return;
  }

   const formData = new FormData();
   formData.append("continent_id", selContinentId?.toString());
   formData.append("country_name", countryName);
   formData.append("countryImgFile", countryImgFile);
  
  try{
    const response = await axios.post("http://192.168.0.114:3001/countries", formData);
    if(response.status === 200) {
      alert("New Country successfull added!");
      
    }
  }catch(error){
    if (axios.isAxiosError(error)) {
      // Ako je greška vezana za axios
      console.error("Axios error:", error.response?.data || error.message);
      alert(
        "An error occurred while adding Country. Please check the console for more details."
      );
    } else {
      // Ako greška nije vezana za axios
      console.error("General error:", error);
      alert("An unexpected error occurred.");
    }
    
  }
  
}


  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    const targetFile = e.target.files
    if (targetFile === null) return;
    SetCountryImgFile(targetFile[0]);
  }

  return (
    <section className="w-container80 mx-auto">
      <h2 className="text-center my-5 text-5xl">Create Continent</h2>
      <form onSubmit={handleSubmitNewCountry} className="mb-20 w-100 flex">
        <section className="flex flex-col w-2/5 px-2">
          <label htmlFor="continents" className="text-xl pb-2 text-gray-800">
            Continents *
          </label>
          <select
            name="continent"
            id="continents"
            className="p-2 text-lg"
            onChange={handleContinentChange}
          >
            <option value="select continent">Select Continent</option>
            {continents.map((continent, index) => (
              <option
                key={index}
                value={continent.continent_name}
                continent-id={continent.continent_id}
              >
                {continent.continent_name}
              </option>
            ))}
          </select>
        </section>
        <section className="flex flex-col justify-end w-3/5 px-2 ms-7">
          <div className="mb-3 flex flex-col">
            <label htmlFor="countryName" className="text-xl mb-2 text-gray-800">
              Country Name *
            </label>
            <input
              id="countryName"
              type="text"
              name="countryName"
              placeholder="Country Name"
              className="border border-gray-300 shadow p-3 rounded mb-5"
              required
              // value={continentName}
              onChange={(e) => setCountryName(e.target.value)}
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label
              htmlFor="countryImage"
              className="text-xl mb-2 text-gray-800"
            >
              Country Image *
            </label>
            <input
              id="countryImage"
              type="file"
              name="countryImgFile"
              placeholder="Country Image"
              className="border border-gray-300 shadow p-3 rounded mb-5 text-gray-600 font-bold"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" flex justify-center border-solid border-2 bg-blue-700 text-white border-blue-700 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-blue-700 hover:bg-inherit hover:text-blue-700"
            >
              CREATE
            </button>
          </div>
        </section>
      </form>
    </section>
  );
}

export default CreateCountry