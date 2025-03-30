import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopNav = ({navigate, loggedIn, setLoggedIn}) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className="d-flex gap-2">
              <Nav.Link onClick={() => navigate("/listing")}>집보기</Nav.Link>
            </div>
            {!loggedIn ? (
              <div className="d-flex gap-2">
                <Nav.Link onClick={() => navigate("/login")}>로그인</Nav.Link>
                <Nav.Link onClick={() => navigate("/signup")}>회원가입</Nav.Link>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Nav.Link onClick={() => navigate("/like")}>좋아한집</Nav.Link>
                <Nav.Link onClick={() => {
                  alert("로그아옷 했습니다.")
                  setLoggedIn(false)
                }}>
                  로그아옷
                </Nav.Link>
              </div>
              
            )}

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav;