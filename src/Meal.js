import { useState , useEffect} from "react";
const Meal = ({meal}) => {
    const [imageurl,setimageurl]=useState("");
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=7e5008a253a54b60ac62c4dbc163e10d&includeNutrition=false`)
     .then((response)=>response.json())
     .then((data)=>{setimageurl(data.image);})
     .catch(()=>{console.log("error");})
    },[meal.id])
    return ( 
        <article>
            <h1>{meal.title}</h1>
            <img src={imageurl} alt="recipe" />
            <ul>
                <li>Preparation time:{meal.radyInMinutes} min</li>
                <li>Number of serving : {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl}>Go To Recipe</a>
        </article>

     ) ;
}
 
export default Meal;