export default function TabButton(props) {
  function handleClick() {
    console.log('hello world!')
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
