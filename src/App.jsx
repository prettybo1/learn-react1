import Header from "./components/Header";
import { differences, ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {

  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Hello React!</h3>
          <ul>
            {ways.map (way => <WayToTeach {...way} />)}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button isActive={contentType == 'way'} onClick={() => handleClick('way')}>
            Доступность
          </Button>

          <Button isActive={contentType == 'easy'} onClick={() => handleClick('easy')}>
            Abrakadabra
          </Button>

          <Button isActive={contentType == 'program'} onClick={() => handleClick('program')}>
            Nedostupnost'
          </Button>

          {!contentType && <p>Click on the button</p>}

          {!contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}
