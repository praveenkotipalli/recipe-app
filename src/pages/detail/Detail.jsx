import { useLocation } from "react-router-dom"
import sanji from "../../assets/sanjiprefood.jpg"
import "./Detail.css"
import meal from "../../assets/mealImage.jpg"
const Detail = () => {
  const {state}=useLocation()
  
   console.log("STATE",state)
  return (
    <div className="detailWrapper">
     <div className="imgWrapper">
     <h1>{state.label}</h1>
      <img src={sanji} alt="food"/>
     </div> 
     <div className="bottomWrapper">
     <div className="nutWrapper">
      <h3>NUTRIENTS</h3>
      <br></br>
      <p><b>
        {state.totalNutrients.CA.label} :{" "}
        {Math.round(state.totalNutrients.CA.quantity)}
        {state.totalNutrients.CA.unit}
        </b>
      </p>
      <p><b>
        {state.totalNutrients.CHOCDF.label} :{" "}
        {Math.round(state.totalNutrients.CHOCDF.quantity)}
        {state.totalNutrients.CHOCDF.unit}
        </b>
      </p>
      <p><b>
        {state.totalNutrients.CHOLE.label} :{" "}
        {Math.round(state.totalNutrients.CHOLE.quantity)}
        {state.totalNutrients.CHOLE.unit}
        </b>
      </p>
      <p><b>
        {state.totalNutrients.ENERC_KCAL.label} :{" "}
        {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
        {state.totalNutrients.ENERC_KCAL.unit}
        </b>
      </p>
      <p><b>{state.totalWeight}</b></p>
      <p><b>
        Calories: {Math.round(state.calories)}
        </b>
      </p>
      {state.digest.slice(0,4).map((item,index)=>(
        <p key={index}><b>
          {item.label}:{Math.round(item.total)}
          </b>
        </p>
      ))}
      </div>
      {/* <div className="mealImage">
        <img src={meal} alt="meal"/>
      </div> */}
      
      <img src={meal} alt="meal"/>
      
      <div className="ingWrapper">
        <h4>INGREDIENTS</h4>
        <br></br>
        {state.ingredientLines.map((ingredient,index)=>(
          <div>
            <p>
              <b>{index + 1}-{ingredient}</b>
            </p>
          </div>
        ))}
      </div>
     </div>
     
    </div>

  )
}

export default Detail