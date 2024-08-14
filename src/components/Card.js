import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Card = ({ card, setCards, cards, connectCards }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDrag = (e, data) => {
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, x: data.x, y: data.y } : c
    );
    setCards(updatedCards);
  };

  const handleResize = (event, { size }) => {
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, width: size.width, height: size.height } : c
    );
    setCards(updatedCards);
  };

  const handleConnect = () => {
    if (selectedCard) {
      connectCards(selectedCard, card.id);
      setSelectedCard(null);
    } else {
      setSelectedCard(card.id);
    }
  };

  return (
    <Draggable
      bounds="parent"
      position={{ x: card.x, y: card.y }}
      onStop={handleDrag}
      disabled={isResizing}
    >
      <ResizableBox
        width={card.width}
        height={card.height}
        minConstraints={[100, 50]}
        onResize={handleResize}
        onResizeStart={() => setIsResizing(true)}
        onResizeStop={() => setIsResizing(false)}
      >
        <div
          className="card"
          style={{ borderColor: card.borderColor }}
          id={card.id}
        >
          <div className="card-content">
            {card.text.slice(0, 20)}...
            <button onClick={() => setShowPopup(true)}>Show More</button>
            <button onClick={handleConnect}>
              {selectedCard === card.id ? "Select Destination" : "Connect"}
            </button>
          </div>
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <p>{card.text}</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Card;
