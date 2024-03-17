import "./Header.css"
const Header = ({query,setQuery,selectedMeal,setSelectedMeal,mealTypes,getData}) => {
  console.log(query, selectedMeal);
  const handleSubmit = (e) =>{
     e.preventDefault();
     getData();
  }
  return (
    <div className="headerWrapper">
      <h1>Recipe App</h1>
      
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
        <input 
          required
          type="text" 
          placeholder="Search" 
          value={query} 
          onChange={(e)=>setQuery(e.target.value)}
          />
        <button type="submit">Search</button>
        <br/>
        <select
          name="mealType"
          id="mealType"
          value={selectedMeal}
          onChange={(e)=>setSelectedMeal(e.target.value)}
          >
            {mealTypes.map((mealType, index)=>(
              <option value={mealType} key={index}>
                {mealType}
              </option>
            ))}
            {/* <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
            <option value="dinner">Dinner</option>
            <option value="teatime">Teatime</option> */}
          </select>
          </form>
      </div>
    </div>
    
  )
}

export default Header