import "./Card.css"
import foodicon from "../../assets/food icon.jpg"
import { useNavigate } from "react-router-dom"
const Card = ({recipes}) => {
  const navigate=useNavigate()
  console.log(recipes)
  return (
    <div className="card">
      {recipes.map(({recipe},index)=>{
        const {label,image}=recipe
        return(
          <div className="cardWrapper" key={index}>
            <h1>{label}</h1>
            <img src={image? image:{foodicon}} alt="food"/>
            <button onClick={()=>navigate("detail",{state: recipe})}>More Details</button>
          </div>
        )
      })}
    </div>
  )
}

export default Card