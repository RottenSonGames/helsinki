import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

import Modal from "./Modal";
import Room from "./Rooms"

import HeaderButton from "./HeaderButton";

function Listing(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedType = params.get("type");

  let roomsInfo = props.roomsInfo;
  let filteredRooms = selectedType
    ? roomsInfo.filter(room => room.type === selectedType)
    : roomsInfo;

  let [origin, setOrigin] = useState(props.setOrigin);

  let [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const sortByPriceAsc = () => {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      else return 0;
    });
  }

  const sortByPriceDesc = () => {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      else return 0;
    });
  }

  const sortByTitleAsc = () => {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    });
  }

  const sortByTitleDesc = () => {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      else return 0;
    });
  }

    return (
      <div className="Main">

        <h5>{selectedType ? `${selectedType} 결과` : null}</h5>

        <div className="sortMenu">
          가격<span><HeaderButton clickEffect={sortByPriceAsc} text="▲"/></span>
          <span><HeaderButton clickEffect={sortByPriceDesc} text="▼"/></span>&nbsp;||&nbsp;
          물건명<span><HeaderButton clickEffect={sortByTitleAsc} text="▲"/></span>
          <span><HeaderButton clickEffect={sortByTitleDesc} text="▼"/></span>
        </div>

        <div>
          {showModal === true ? (
            <Modal
              currentIndex={currentIndex}
              roomsInfo={roomsInfo}
              setShowModal={setShowModal}
            />
          ) : null}
        </div>

        <div className="content">
          {filteredRooms.map((x, index) => {
            return (
              <div key={x.id}>
                <Room
                  roomsInfo={roomsInfo}
                  index={index}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  currentUser={props.currentUser}
                  loggedIn={props.loggedIn}
                />
              </div>
            );
          })}
        </div>

      </div>
    );
  }

export default Listing;
