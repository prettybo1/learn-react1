import Header from "./components/Header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState("CLick on the button");

  function handleClick() {
    setContent(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Hello React!</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button onClick={handleClick}>Доступность</Button>
        </section>
      </main>
    </div>
  );
}
