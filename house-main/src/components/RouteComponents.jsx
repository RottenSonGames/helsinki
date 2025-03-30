import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home"
import Listing from "../pages/Listing";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Like from "../pages/Like";

const RouteComponents = ({roomsInfo, setRoomsInfo, roomType, users, setUsers, currentUser, setCurrentUser, loggedIn, setLoggedIn}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/listing" element={<Listing
          roomsInfo={roomsInfo}
          setRoomsInfo = {setRoomsInfo}
          roomType={roomType}
          currentUser={currentUser}
          loggedIn={loggedIn}
          />}
        />
        <Route path="/login" element={<Login
          users={users}
          setCurrentUser={setCurrentUser}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />}/>
        <Route path="/signup" element={<SignUp
          users={users}
          setUsers={setUsers}
        />} />
        <Route path="/like" element={<Like
          roomsInfo={roomsInfo}
          setRoomsInfo = {setRoomsInfo}
          currentUser={currentUser}
        />} />
        
        <Route path="*" element={
          <div>
            <h4>
              404. That’s an error.
            </h4>
            <p>
              The requested URL /fdjsalflsadjfldsa was not found on this server. That’s all we know.
            </p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default RouteComponents