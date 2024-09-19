import { useEffect, useState } from "react";
import axios from "axios";

export const useGetThread = (cfskey, cfstoken) => {
  const url = `${import.meta.env.VITE_RECOMMENDER_API_URL}/threads/token/${cfskey}/${cfstoken}`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        setResult(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al realizar la petición:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { loading, result, error };
};
