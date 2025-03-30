import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import roomsData from "./data/oneroom";

import TopNav from "./components/TopNav"
import RouteComponents from "./components/RouteComponents"

function App(){
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  const [roomsInfo, setRoomsInfo] = useState(roomsData);
  let navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user")) || []
    setUsers(Array.isArray(storedUsers) ? storedUsers : [storedUsers])
    console.log("From App.jsx", users)
  }, [])

  return (
    <div className="App">
      <TopNav navigate={navigate} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <RouteComponents
        roomsInfo={roomsInfo}
        setRoomsInfo={setRoomsInfo}
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}
export default App;