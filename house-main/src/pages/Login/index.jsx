import { useRef } from "react";

const Login = ({users, setCurrentUser, loggedIn, setLoggedIn}) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const login = (users, setCurrentUser, setLoggedIn) => {
    let userTryingToLogin = users.find(user => user.username === usernameRef.current.value);
    if (!userTryingToLogin) {
      alert("없는 유저내임 입니다.");
      return;
    }
  
    if (userTryingToLogin.password !== passwordRef.current.value) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }
    
    setLoggedIn(true);
    setCurrentUser(userTryingToLogin);

    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    const userLikes = storedLikes.find((likes) => likes.username === userTryingToLogin.username);
  }

  const logout = (setLoggedIn) => {
    setLoggedIn(false);
    setCurrentUser({});
  }

  return (
    <div>
      {!loggedIn ? (
        <div>
          유저내임: <input type="text" ref={usernameRef}/><br/>
          비밀번호: <input type="password" ref={passwordRef}/><br/>
          <button onClick={()=>login(users, setCurrentUser, setLoggedIn)}>로그인</button>
        </div>
      ) : (
        <div>
          <p>로그인 했습니다! 환영합니다.</p>
          <a href="/">매인 페이지로 가기</a><br/>
          <button onClick={()=>logout(setLoggedIn)}>로그아옷</button>
        </div>
      )}
    </div>
  )
}

export default Login