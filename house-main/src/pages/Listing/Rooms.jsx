import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Room = (props) => {
  let rooms = props.roomsInfo;
  let i = props.index;
  let price = rooms[i].price;
  let strPrice = price.toLocaleString("ko-KR");

  let currentUser = props.currentUser;
  let loggedIn = props.loggedIn;

  // Set the initial state of fillHeart based on whether the house is liked
  const [fillHeart, setFillHeart] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      let storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
      let userLikes = storedLikes.find((likes) => likes.username === currentUser.username);

      if (userLikes && userLikes.likedHouses.includes(rooms[i].id)) {
        setFillHeart(true);
      }
    }
  }, [loggedIn, currentUser, rooms, i]);

  const addLike = (id) => {
    if (!loggedIn) {
      alert("로그인 해야 됩니다.");
      return;
    }
  
    setFillHeart(true);
    let storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    let userLikes = storedLikes.find((likes) => likes.username === currentUser.username);
    if (!userLikes) {
      userLikes = { username: currentUser.username, likedHouses: [] };
      storedLikes.push(userLikes);
    }
    if (!userLikes.likedHouses.includes(id)) {
      userLikes.likedHouses.push(id);
    }
    localStorage.setItem("likes", JSON.stringify(storedLikes));
  }
  
  const removeLike = (id) => {
    if (!loggedIn) {
      alert("로그인 해야 됩니다.");
      return;
    }
  
    setFillHeart(false);
    let storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    let userLikes = storedLikes.find((likes) => likes.username === currentUser.username);
    if (userLikes) {
      userLikes.likedHouses = userLikes.likedHouses.filter((houseId) => houseId !== id);
      localStorage.setItem("likes", JSON.stringify(storedLikes));
    }
  }

  return (
    <div>
      <h4
        style={{ cursor: 'pointer' }}
        onClick={() => {
          props.setCurrentIndex(i);
          props.setShowModal(true);
        }}
      >
        {rooms[i].title}
      </h4>
      <p>
        {rooms[i].type}&nbsp;&nbsp;{strPrice}만원
        <div>
          {!fillHeart ? (
            <>
              <button className="heart-button" onClick={() => addLike(rooms[i].id)}>
                <FontAwesomeIcon icon={regularHeart} />
              </button> 좋아하기&nbsp;&nbsp;
            </>
          ) : (
            <>
              <button className="heart-button" onClick={() => removeLike(rooms[i].id)}>
                <FontAwesomeIcon icon={solidHeart} style={{ color: "#ff0000" }} />
              </button> 싫어하기&nbsp;&nbsp;
            </>
          )}
          ☎ 허위매물신고
        </div>
      </p>
      <div className="imgBox">
        <img src={rooms[i].image} className="room-img" alt="Room" />
      </div>
    </div>
  );
};

export default Room;