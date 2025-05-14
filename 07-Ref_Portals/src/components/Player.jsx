import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handlClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
    // 규칙 위반!
    // 직접 DOM을 조작해서 UI를 바꾸지 말라는 뜻
    // 왜냐면 리액트가 그걸 자동으로 해주는데 
    // DOM을 직접 건드리면 리액트의 내부 상태와 실제 DOM 상태가 불일치할 수 있기 때문
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handlClick}>Set Name</button>
      </p>
    </section>
  );
}
