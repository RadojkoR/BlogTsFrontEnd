import { useEffect, useState } from "react";
import axios from "axios";

interface Continent {
  continent_id: number;
  continent_name: string;
  continent_img:string;
  created_at: string;
}

function useContinents() {
 const [continents, setContinents] = useState<Continent[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchData = async() => {
        try{
            const response = await axios.get("http://192.168.0.112:3001/continents");
            setContinents(response.data)
        }catch(error){
            console.error("Error Fetching Continent data", error);
        } finally{
            setLoading(false)
        }
    };
    fetchData()
 }, []);

return{continents, loading}

}



export default useContinents