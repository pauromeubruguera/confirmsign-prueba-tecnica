import { useState } from "react"
import axios from "axios"

export const usePostThread = () => {
  const [error, setError] = useState('')

  const sendPostRequest = async (thread) => {
    const regex = /veremail\/([^/]+)\/([^/]+)/
    const matches = thread.public.match(regex)
    const cfskey = matches[1]
    const cfstoken = matches[2]
    const url = `${import.meta.env.VITE_RECOMMENDER_API_URL}/threads/token/${cfskey}/${cfstoken}/agreement/true`
    setError(null)
    axios.post(url, { data: thread })
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al realizar la petición:', error);
        setError(error)
      });
  }

  return { error, sendPostRequest }
}
