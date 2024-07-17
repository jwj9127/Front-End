// main.js
export function mainPage() {
  // 모든 팝업을 닫는 함수
  function Allpopups() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      popup.style.display = "none";
    });
  }

  // 백색소음 팝업
  document
    .querySelector(".whiteSound_popup .exit")
    ?.addEventListener("click", function () {
      document.querySelector(".whiteSound_popup").style.display = "none";
    });

  document.querySelector("#whiteSound")?.addEventListener("click", function () {
    Allpopups();
    const whiteSound_popup = document.querySelector(".whiteSound_popup");
    if (whiteSound_popup) {
      whiteSound_popup.style.display = "block";
    }
  });

  // 배경 이미지 팝업
  document
    .querySelector(".background_popup .exit")
    ?.addEventListener("click", function () {
      document.querySelector(".background_popup").style.display = "none";
    });

  document
    .querySelector("#backgroundImage")
    ?.addEventListener("click", function () {
      Allpopups();
      const background_popup = document.querySelector(".background_popup");
      if (background_popup) {
        background_popup.style.display = "block";
      }
    });

  // 친구 팝업
  document
    .querySelector(".friends_popup .exit")
    ?.addEventListener("click", function () {
      document.querySelector(".friends_popup").style.display = "none";
    });

  document.querySelector("#friends")?.addEventListener("click", function () {
    Allpopups();
    const friends_popup = document.querySelector(".friends_popup");
    if (friends_popup) {
      friends_popup.style.display = "block";
    }
  });

  // 캘린더 팝업
  document
    .querySelector(".callender_popup .exit")
    ?.addEventListener("click", function () {
      document.querySelector(".callender_popup").style.display = "none";
    });

  document.querySelector("#callender")?.addEventListener("click", function () {
    Allpopups();
    const callender_popup = document.querySelector(".callender_popup");
    if (callender_popup) {
      callender_popup.style.display = "block";
    }
  });

  // 투두리스트 팝업
  document
    .querySelector(".todolist_popup .exit")
    ?.addEventListener("click", function () {
      document.querySelector(".todolist_popup").style.display = "none";
    });

  document.querySelector("#todolist")?.addEventListener("click", function () {
    Allpopups();
    const todolist_popup = document.querySelector(".todolist_popup");
    if (todolist_popup) {
      todolist_popup.style.display = "block";
    }
  });
}
