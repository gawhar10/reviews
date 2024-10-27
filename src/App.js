import { useState } from "react";
import { profiles } from "./profile";
const App = () => {
  const people = profiles;
  let [index, setIndex] = useState(0);
  const person = profiles[index];

  const checkIndex = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    const num = index + 1;
    const newIndex = checkIndex(num);
    setIndex(newIndex);
  };

  const previousPerson = () => {
    const num = index - 1;
    const newIndex = checkIndex(num);
    setIndex(newIndex);
  };

  const randomPerson = () => {
    const randomNum = Math.floor(Math.random() * profiles.length);
    if (randomNum === index) {
      const num = randomNum + 1;
      const newIndex = checkIndex(num);
      setIndex(newIndex);
    } else {
      setIndex(randomNum);
    }
  };

  return (
    <section>
      <article>
        <Card person={person} />
        <div className="btn_container">
          <button className="btn" onClick={previousPerson}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="btn" onClick={nextPerson}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="btn_container">
          <button className="shuffle_btn" onClick={randomPerson}>
            SHUFFLE
          </button>
        </div>
      </article>
    </section>
  );
};

const Card = (props) => {
  const { img, name, designation, summery } = props.person;
  return (
    <div className="text_container">
      <div className="avatar_container">
        <img src={img} alt={name}></img>
      </div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{designation}</h2>
      <p>{summery}</p>
    </div>
  );
};

export default App;
