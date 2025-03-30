function Modal(props) {
  let room = props.roomsInfo[props.currentIndex];
  return (
    <div className="black-bg">
      <div className="white-bg">
        <h4>{room.title}</h4>
        <p>{room.content}</p>
        <p>가격 : {room.price}</p>
        <button
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          닫기
        </button>
        <div className="modal-img">
          <img src={room.image} width="400px"></img>
        </div>
      </div>
    </div>
  );
}

export default Modal;