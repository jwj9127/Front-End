import "./Nickname.css";

import React, { useState, useRef, useEffect } from "react";

function EditableInput() {
  const [inputValue, setInputValue] = useState(""); // input의 현재 값
  const [savedValue, setSavedValue] = useState(""); // 저장된 값
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창의 상태
  const inputRef = useRef(null); // input 엘리먼트를 참조하는 ref

  // 수정 버튼을 클릭했을 때의 핸들러
  const handleEditClick = () => {
    setInputValue(""); // input 값을 초기화
    setIsModalOpen(true); // 모달 창을 엽니다
  };

  // 저장 버튼을 클릭했을 때의 핸들러
  const handleSaveClick = () => {
    setSavedValue(inputValue); // 새로운 값을 저장
    setIsModalOpen(false); // 모달 창을 닫습니다
  };

  // input 값이 변경되었을 때의 핸들러
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // input 값을 업데이트
  };

  // 모달을 닫는 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 창을 닫습니다
  };

  // Enter 키를 감지하는 핸들러
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveClick(); // Enter 키를 눌렀을 때 저장
    }
  };

  // 모달이 열릴 때 input에 포커스를 맞추기 위한 useEffect
  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus(); // input 엘리먼트에 포커스 맞추기
    }
  }, [isModalOpen]);

  return (
    <div className="box4">
      <button className="pencil" onClick={handleEditClick}>
        수정
      </button>
      <p className="saveName">{savedValue}</p>{" "}
      {/* 저장된 값을 보여주는 p 태그 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>이름 수정</h2>
            <input
              type="text"
              ref={inputRef} // input 엘리먼트를 참조
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Enter 키 감지
              placeholder="Enter new value"
            />
            <button onClick={handleSaveClick}>저장</button>
            <button onClick={handleCloseModal}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditableInput;

// import React, { useState } from "react";

// function EditableInput() {
//   const [inputValue, setInputValue] = useState(""); // input의 현재 값
//   const [savedValue, setSavedValue] = useState(""); // 저장된 값
//   const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창의 상태

//   // 수정 버튼을 클릭했을 때의 핸들러
//   const handleEditClick = () => {
//     setInputValue(""); // input 값을 초기화
//     setIsModalOpen(true); // 모달 창을 엽니다
//   };

//   // 저장 버튼을 클릭했을 때의 핸들러
//   const handleSaveClick = () => {
//     setSavedValue(inputValue); // 새로운 값을 저장
//     setIsModalOpen(false); // 모달 창을 닫습니다
//   };

//   // input 값이 변경되었을 때의 핸들러
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value); // input 값을 업데이트
//   };

//   // 모달을 닫는 핸들러
//   const handleCloseModal = () => {
//     setIsModalOpen(false); // 모달 창을 닫습니다
//   };

//   // Enter 키를 감지하는 핸들러
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSaveClick(); // Enter 키를 눌렀을 때 저장
//     }
//   };

//   return (
//     <div className="box4">
//       <button className="pencil" onClick={handleEditClick}>
//         수정
//       </button>
//       <p className="saveName">{savedValue}</p>
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>이름 수정</h2>
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown} // Enter 키 감지
//               placeholder="Enter new value"
//             />
//             <button onClick={handleSaveClick}>저장</button>
//             <button onClick={handleCloseModal}>취소</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EditableInput;

// import React, { useState } from "react";

// function Nickname() {
//   // name 상태와 newName 상태를 관리하기 위한 useState 훅

//   const [name, setName] = useState("Initial Name");
//   const [newName, setNewName] = useState("");

//   // 변경된 이름을 저장하는 함수
//   const saveNewName = () => {
//     setName(newName);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={newName}
//         onChange={(e) => setNewName(e.target.value)}
//         placeholder="Enter new name"
//       />
//       <div className="box4">
//         <button className="pencil" onClick={saveNewName}>
//           저장
//         </button>
//       </div>

//       <p className="nickname">{name}</p>
//     </div>
//   );
// }

// export default Nickname;
