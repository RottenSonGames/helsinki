import { useNavigate } from "react-router-dom";
import "./index.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const HouseType = ({ text }) => {
  let navigate = useNavigate();

  const loadImage = (text) => {
    let imgUrl =
      text === "아파트"
        ? "/images/room1.jpg"
        : text === "원룸"
        ? "/images/room2.jpg"
        : "/images/room4.jpg";

    return imgUrl;
  };

  return (
    <div>
      <Nav.Link onClick={() => { navigate(`/listing?type=${text}`); }}>
        <Container className="sub-container">
          <div className="imgBox">
            <img src={loadImage(text)} className="room-img" alt={text} />
            <div className="overlay-text">{text}</div>
          </div>
        </Container>
      </Nav.Link>
    </div>
  );
};

export default HouseType;