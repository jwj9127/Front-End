import React, { useState } from "react";
import Modal from "react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backroundColor: "rgba(0,0,0, 0/5)",
    },
    content: {
      width: "300px",
      height: "400px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
  };

  return (
    <div>
      <button onClick={openModal}>모달열기</button>
      <Modal isOpen={isOpen} onRequstClose={closeModal} style={customStyles}>
        <h1>Modal</h1>
        <p>모달 컨텐츠</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}
export default App;
