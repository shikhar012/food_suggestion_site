import Meal from "./Meal";
const MealList = ({mealData}) => {
 const nutrients=mealData.nutrients;
 console.log(mealData);
    return ( 
        <div>
        <section className="nutrients">
              <h1>Macros</h1>
              <ul>
              <li>Calories:{nutrients.calories.toFixed(0)}</li>
                <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                <li>Fat: {nutrients.fat}</li>
                <li>Protein: {nutrients.protein.toFixed(0)}</li>
              </ul>
        </section>
    { <section className="meals">
           {mealData.meals.map((meal)=> {
             return <Meal key={meal.id} meal={meal}/>;
           })}
      </section>
        
        }
      </div>
        
     );
}
 
export default MealList;