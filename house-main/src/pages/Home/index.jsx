import HouseType from "./HouseType"
import "./index.css"

function Home() {
  return (
    <div>
      <div className="main-container">
        <HouseType text="아파트"/>
        <HouseType text="원룸"/>
        <HouseType text="주택"/>
      </div>
    </div>
  )
}

export default Home;