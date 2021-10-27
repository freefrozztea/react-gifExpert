import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handlerAdd = (elem) => {
  //   setCategories([...categories, 'HunterXHunter'])
  // }

  return(
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map( (elem) => (
            <GifGrid
              key={ elem }
              category={ elem }
            />
          ))
        }
      </ol>
    </>
  );
}