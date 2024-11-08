import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContinents } from "../Hooks";


function CreateContinent() {
  const [continentName, setContinentName] = useState("");
  const [continentImgName, setContinentImgName]= useState("");
  const [imgFile, setImgFile] = useState<File | undefined>()
  const navigate = useNavigate()
  const {continents} = useContinents();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("continent image name", continentImgName);
    console.log("cimgage file", imgFile);
    
    if(!continentImgName){
      alert("Please select an image")
    }

    const isContinentExist = continents.some(continent => continent.continent_name === continentName);

    if(isContinentExist) {
      alert("Continent with this name already exists. Please choose another name");
      return;
    }
    
    if(typeof imgFile === 'undefined') return;
    const formData = new FormData();
    formData.append("continent_name", continentName)
    formData.append("continent_img", continentImgName);
    formData.append("imgFile", imgFile)

    try {
      const response = await axios.post(
        "http://192.168.0.114:3001/continents",
        formData);
      if (response.status === 200) {
        alert("New Continent successfull added!");
        setContinentName("");
        setContinentImgName("");
        navigate("/createBlog");
      }
    } catch (error) {
      console.error("Error creating Continent", error);
      alert("An error occurred while adding a continent.");
    }
  }

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     console.log("input fajl", e.target.files);
     const targetFile = e.target.files
     if(targetFile === null) return;
     setImgFile(targetFile[0])
     console.log("handle on change", targetFile[0]);
     
     
     if (e.target.files && e.target.files[0]) {
       setContinentImgName(e.target.files[0].name);
     }
   };

  return (
    <section className="w-container80 mx-auto">
      <h2 className="text-center my-5 text-5xl">Create Continent</h2>
      <form onSubmit={handleSubmit} className="mb-20">
        <div className="mb-3 flex flex-col">
          <label htmlFor="continentName" className="pb-2 mt-5 text-gray-600">
            Continent Name *
          </label>
          <input
            id="continentName"
            type="text"
            name="continentName"
            placeholder="Continent Name"
            className="border border-gray-300 shadow p-3 w-4/5 rounded mb-5"
            required
            value={continentName}
            onChange={(e) => setContinentName(e.target.value)}
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="continentImage" className="pb-2 mt-1 text-gray-600">
            Continent Image *
          </label>
          <input
            id="continentImage"
            type="file"
            name="continentImage"
            placeholder="Continent Image"
            className="border border-gray-300 shadow p-3 w-4/5 rounded mb-5 text-gray-600 font-bold"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/4 flex justify-center border-solid border-2 bg-blue-700 text-white border-blue-700 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-blue-700 hover:bg-inherit hover:text-blue-700"
          >
            CREATE
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateContinent