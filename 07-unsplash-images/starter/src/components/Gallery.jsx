import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}&query=`;


function Gallery() {
  const { formValue } = useGlobalContext();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["photos", formValue],
    queryFn: async () => await axios(`${url}${formValue}`),
  });

  if (isLoading) return <>loading...</>;

  if (isError) return <>Something went wrong!</>;

  const results = data.data.results;

  if(results.length==0) return <>Something went wrong!</>;

  return (
    <section className="image-container">
      {results.map((res, index) => (
        <img className="img" key={index} src={res?.urls?.regular} />
      ))}
    </section>
  );
}

export default Gallery;
