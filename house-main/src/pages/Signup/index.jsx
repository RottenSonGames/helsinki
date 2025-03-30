import { useState, useRef } from "react";

function SignUp({users, setUsers}) {
  const nameRef = useRef();
  const birthdateRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [registered, setRegistered] = useState(false)

  const saveUser = (event, setUsers) => {
    event.preventDefault();
    if (nameRef.current.value === "" || birthdateRef.current.value === "" || emailRef.current.value === "" || usernameRef.current.value === "" || passwordRef.current.value === "") {
      alert("모든 필드를 작성해야 합니다.")
      return;
    }

    if (users.some(user => user.email === emailRef.current.value)) {
      alert("이미 사용한 이매일 입니다");
      return;
    }

    if (users.some(user => user.username === usernameRef.current.value)) {
      alert("이미 사용한 유저내임 입니다 입니다");
      return;
    }

    const newUser = {
      name: nameRef.current.value,
      birthdate: birthdateRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }

    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("user", JSON.stringify(storedUsers));

    const userLikes = { username: newUser.username, likedHouses: [] };
    localStorage.setItem("likes", JSON.stringify([userLikes]));

    setUsers(users.concat(newUser));
    setRegistered(true);
  }

  return (
    <div>
      {!registered ? (
        <div>
          <h1>사용자를 입력하세요!</h1>

          <div>
            이름 <input type="text" ref={nameRef} /><br/>
            생일 <input type="text" ref={birthdateRef} /><br/>
            이매일 <input type="text" ref={emailRef} /><br/>
            유저내임 <input type="text" ref={usernameRef} /><br/>
            비밀번호 <input type="text" ref={passwordRef} /><br/>
  
            <button onClick={(event) => saveUser(event, setUsers)}>회원 가입 하기</button>
          </div>
        </div>
      ) : (
        <div>
          <p>회원가입이 완료되었습니다! 이제 로그인할 수 있습니다.</p>
          <a href="/login">로그인 페이지로 가기</a>
        </div>
      )}
    </div>
  );
}

export default SignUp;
