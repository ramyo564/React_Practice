import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(initialInvestment, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [initialInvestment]: newValue,
        // object["key"]
        // object.key 는 직접 수정 => 불변성 꺠짐
        // [key]: value <- 기존 키값과 벨류 값을 덮어씀
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
