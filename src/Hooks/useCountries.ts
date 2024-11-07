import axios from "axios";
import { useEffect, useState } from "react"

interface Country {
  continentId: number | null | undefined;
  country_id: number;
  country_name: string;
  continent_id: number; // Ako vam je ovo potrebno
  country_img?: string; // Ako imate slike za zemlje
  created_at: string;
}

function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://192.168.0.114:3001/countries');
                setCountries(response.data)
            }catch(error){
                console.error("Error fetching Countries Data", error);           
            } finally{
                setLoading(false)
            }
        }
       fetchData()
    }, [])
    return{countries, loading}
}

export default useCountries