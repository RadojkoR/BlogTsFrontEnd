import Modal from "react-modal";
import Buttons from '../Components/Buttons/Buttons';
import { useContinents, useCountries } from '../Hooks';
import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Editor} from "react-draft-wysiwyg";
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

Modal.setAppElement("#root");


// function uploadImageCallBack(file) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://api.imgur.com/3/image");
//     xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
//     const data = new FormData();
//     data.append("image", file);
//     xhr.send(data);
//     xhr.addEventListener("load", () => {
//       const response = JSON.parse(xhr.responseText);
//       resolve(response);
//     });
//     xhr.addEventListener("error", () => {
//       const error = JSON.parse(xhr.responseText);
//       reject(error);
//     });
//   });
// }



function CreateBlog() {
 
 
  

    const {continents} = useContinents();
    const {countries} = useCountries();

    const [continentId, setContinentId] = useState<number | null>()
    const [countryId, setCountryId] = useState<number | null>()
    const [blogTitle, SetBlogTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    if (!continents || !countries) {
      return <div>Loading...</div>;
    }

    const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      const continentIdSel = Number(e.target.selectedOptions[0].getAttribute('data-continent-id'))
      setContinentId(continentIdSel);
    }

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      const countryIdSel = Number(e.target.selectedOptions[0].getAttribute("data-country-id"));
      setCountryId(countryIdSel)
    }

    const handleSubmitBlog = async (e: React.FormEvent) => {
        e.preventDefault();

         if (!continentId || !countryId || !blogTitle || !content) {
           alert("Molimo vas da popunite sva obavezna polja.");
           return;
         }      
         
        const blogData = {
          continent_id: continentId,
          country_id: countryId,
          title: blogTitle, 
          content: content
        };

        console.log("form is submited: ","continent id is: ", continentId,"country id Is: ", countryId, "And Title is: ", blogTitle);

        try{
           await axios.post("http://192.168.0.114:3001/blogs", blogData)
        }catch(error){
          console.error("Error Creating New Blog", error);
          alert("An Error occurred while adding New Blog.");  
        }
        
        navigate('/')
        
    }


    // EDITOR

     function uploadImageCallBack(file: File) {
       return new Promise((resolve) => {
         const imageURL = URL.createObjectURL(file);
         resolve({ data: { link: imageURL } });

        //  const formData = new FormData();
        //  formData.append("image", file);

        //  axios
        //    .post("http://localhost:3001/upload-image", formData, {
        //      headers: { "Content-Type": "multipart/form-data" },
        //    })
        //    .then((response) => {
        //      console.log("Image uploaded successfully:", response.data);
        //    })
        //    .catch((error) => {
        //      console.error("Error uploading image:", error);
        //    });
       });
     }

    
    


  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mt-10 mb-5 text-5xl">Create New Blog</h2>

      <form onSubmit={handleSubmitBlog} className="w-4/5 my-14">
        {/* Continents */}
        <section className="flex w-4/5 items-end justify-between mb-7">
          <div className="flex flex-col w-1/4">
            <label htmlFor="continents" className="text-xl mb-2 text-gray-800">
              Continents*
            </label>
            <select
              name="continents"
              id="continents"
              className="py-3 px-5 w-48"
              onChange={handleContinentChange}
            >
              <option value="select continent">Select Continent</option>
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
          </div>
          <div className="w-3/4 flex justify-end">
            <Buttons
              toLink="/createContinent"
              title="Add New Continent"
              classes="w-44 flex justify-center border-solid border-2 border-lime-600 py-2 px-3 text-lime-600 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-lime-600 hover:text-white"
            />
            <Buttons
              toLink="/editContinent"
              title={"Edit"}
              classes={
                "w-24 flex justify-center border-solid border-2 bg-yellow-600 text-white border-yellow-600 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-yellow-600 hover:bg-inherit hover:text-yellow-600 ms-2"
              }
            />
            <Buttons
              toLink="/deleteContinent"
              title={"Delete"}
              classes={
                "w-24 flex justify-center border-solid border-2 bg-red-900 text-white border-red-900 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-red-900 hover:bg-inherit hover:text-red-900 ms-2"
              }
            />
          </div>
        </section>
        <section className="flex w-4/5 items-end justify-between mb-7">
          <div className="flex flex-col w-1/4">
            <label htmlFor="continents" className="text-xl mb-2 text-gray-800">
              Countries*
            </label>
            <select
              name="countries"
              id="countries"
              className="py-3 px-5 w-48"
              onChange={handleCountryChange}
              disabled={!continentId}
            >
              <option value="select country">Select Country</option>
              {countries
                .filter((country) => country.continent_id === continentId)
                .map((country, index) => (
                  <option
                    key={index}
                    value={country.country_name}
                    data-country-id={country.country_id}
                  >
                    {country.country_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-3/4 flex justify-end">
            <Buttons
              toLink="/createCountry"
              title="Add New Country"
              classes="w-44 flex justify-center border-solid border-2 border-lime-600 py-2 px-3 text-lime-600 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-lime-600 hover:text-white"
            />
            <Buttons
              toLink="/editCountry"
              title={"Edit"}
              classes={
                "w-24 flex justify-center border-solid border-2 bg-yellow-600 text-white border-yellow-600 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-yellow-600 hover:bg-inherit hover:text-yellow-600 ms-2"
              }
            />
            <Buttons
              toLink="/deleteCountry"
              title={"Delete"}
              classes={
                "w-24 flex justify-center border-solid border-2 bg-red-900 text-white border-red-900 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-red-900 hover:bg-inherit hover:text-red-900 ms-2"
              }
            />
          </div>
        </section>

        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl mb-2 text-gray-800">
            Title*
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 shadow p-3 w-4/5 rounded mb-5"
            placeholder="Title"
            required
            onChange={(e) => SetBlogTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl mb-2 text-gray-800">
            Content*
          </label>
          <input
            type="text"
            id="content"
            placeholder="Content"
            required
            className="border border-gray-300 shadow p-3 w-4/5 rounded mb-5"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {/* EDITOR */}

        

        <Editor
          wrapperClassName="wrapper-class border border-2 h-auto min-h-[300px]"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            image: {
              uploadEnabled: true,
              uploadCallback: uploadImageCallBack,
              previewImage: true, // Omogućava prikaz slike u editoru
              alt: { present: true, mandatory: true },
              inputAccept: "image/jpg, image/png, image/gif",
            },
          }}
        />

        <button className="w-2/4 flex justify-center border-solid border-2 bg-blue-700 text-white border-blue-700 py-2 px-4  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:border-blue-700 hover:bg-inherit hover:text-blue-700 mt-10">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateBlog