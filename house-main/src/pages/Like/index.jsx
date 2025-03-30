import { useEffect, useState } from 'react';

const Like = ({ roomsInfo, currentUser }) => {
  const [likedRooms, setLikedRooms] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    const userLikes = storedLikes.find((likes) => likes.username === currentUser.username);

    if (userLikes) {
      const likedHouseIds = userLikes.likedHouses;
      const likedRooms = roomsInfo.filter((room) => likedHouseIds.includes(room.id));
      setLikedRooms(likedRooms);
    }
  }, [currentUser, roomsInfo]);

  return (
    <div>
      <h3>좋아한집</h3>
      {likedRooms.length === 0 ? (
        <p>좋아한 집이 없습니다.</p>
      ) : (
        <div>
          {likedRooms.map((room) => (
            <div key={room.id}>
              <h4>{room.title}</h4>
              <img src={room.image} alt={room.title} style={{ width: "100px" }} />
              <p>{room.content}</p>
              <p>{room.price.toLocaleString()} 원</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Like;