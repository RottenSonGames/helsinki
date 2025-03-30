const HeaderButton = ({clickEffect, text}) => {
  
  const buttonStyle = {
    color: text === "▲" ? "yellowgreen" : text === "▼" ? "red" : "cyan",
    border: "none",
    background: "none"
  }

  return (
    <>
      <button style={buttonStyle} onClick={clickEffect}><b>{text}</b></button>
    </>
  )
}

export default HeaderButton