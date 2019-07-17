import { useEffect, useState } from "react";
import { API_DOMAIN } from "./constants";

async function fetchData(url, setLoading) {
  try {
    const response = await fetch(`${API_DOMAIN}${url}`);
    const json = await response.json();
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      setData(json);
      setLoading(false);
    }
  } catch (error) {
    console.log(error);
  }
}



const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
      fetchData({
        url,
        onLoading: setLoading,
        onError: () =>  });
    },
    [url]
  );

  return { loading, data, setData };
};

export { useFetch };
