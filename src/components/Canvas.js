import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card";
import Xarrow from "react-xarrows";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [connections, setConnections] = useState([]);

  const addCard = () => {
    const newCard = {
      id: `card-${cards.length}`,
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      borderColor: getRandomColor(),
    };
    setCards([...cards, newCard]);
  };

  const connectCards = (startId, endId) => {
    setConnections([...connections, { start: startId, end: endId }]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="canvas">
        <button onClick={addCard} className="add-card-btn">
          Add Card
        </button>
        <div className="canvas-area">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              setCards={setCards}
              cards={cards}
              connectCards={connectCards} // Pass connect function
            />
          ))}
          {connections.map((conn, index) => (
            <Xarrow
              key={index}
              start={conn.start}
              end={conn.end}
              color="blue"
              strokeWidth={2}
              headSize={6}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Canvas;
