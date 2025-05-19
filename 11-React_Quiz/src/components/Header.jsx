import quiz_logo_img from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quiz_logo_img} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
