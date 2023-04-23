import { useState } from "react";
import MealList from "./MealList"
function App() {
  const [mealData,setMealData]=useState(null);
  const [calories,setCalories]=useState(2000);
  const handleChange=(e)=>{
       setCalories(e.target.value);
  }
  const getMealData=()=>{
      fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=7e5008a253a54b60ac62c4dbc163e10d&timeFrame=day&targetCalories=${calories}`)
      .then((response)=>response.json())
      .then((data)=>{
        setMealData(data); 
        //console.log(data);
      })
      .catch(()=>{
        console.log("error")
      });
  }
  return (
    <div className="App">
     <section>
      <input type="number" placeholder="calories(e.g. 2000)" 
      onChange={handleChange} />
     </section>
     <button onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

export default App;
