import { useEffect, useState } from "react";

export function useDownloadData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = () => {
    setIsLoading(true);
    getData()
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    load();

  }, []);

  return {
    data,
    isLoading,
    error
  }
}