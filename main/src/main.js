// src/main.js

export function Mainpage() {
  console.log("Mainpage function called");

  function Allpopups() {
    console.log("Allpopups function called");
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      popup.style.display = "none";
    });
  }

  document
    .querySelector(".whiteSound_popup .exit")
    ?.addEventListener("click", function () {
      console.log("Closing whiteSound_popup");
      document.querySelector(".whiteSound_popup").style.display = "none";
    });

  document.querySelector("#whiteSound")?.addEventListener("click", function () {
    console.log("Opening whiteSound_popup");
    Allpopups();
    const whiteSound_popup = document.querySelector(".whiteSound_popup");
    if (whiteSound_popup) {
      whiteSound_popup.style.display = "block";
    }
  });

  document
    .querySelector(".background_popup .exit")
    ?.addEventListener("click", function () {
      console.log("Closing background_popup");
      document.querySelector(".background_popup").style.display = "none";
    });

  document
    .querySelector("#backgroundImage")
    ?.addEventListener("click", function () {
      console.log("Opening background_popup");
      Allpopups();
      const background_popup = document.querySelector(".background_popup");
      if (background_popup) {
        background_popup.style.display = "block";
      }
    });

  document
    .querySelector(".friends_popup .exit")
    ?.addEventListener("click", function () {
      console.log("Closing friends_popup");
      document.querySelector(".friends_popup").style.display = "none";
    });

  document.querySelector("#friends")?.addEventListener("click", function () {
    console.log("Opening friends_popup");
    Allpopups();
    const friends_popup = document.querySelector(".friends_popup");
    if (friends_popup) {
      friends_popup.style.display = "block";
    }
  });

  document
    .querySelector(".callender_popup .exit")
    ?.addEventListener("click", function () {
      console.log("Closing callender_popup");
      document.querySelector(".callender_popup").style.display = "none";
    });

  document.querySelector("#callender")?.addEventListener("click", function () {
    console.log("Opening callender_popup");
    Allpopups();
    const callender_popup = document.querySelector(".callender_popup");
    if (callender_popup) {
      callender_popup.style.display = "block";
    }
  });

  document
    .querySelector(".todolist_popup .exit")
    ?.addEventListener("click", function () {
      console.log("Closing todolist_popup");
      document.querySelector(".todolist_popup").style.display = "none";
    });

  document.querySelector("#todolist")?.addEventListener("click", function () {
    console.log("Opening todolist_popup");
    Allpopups();
    const todolist_popup = document.querySelector(".todolist_popup");
    if (todolist_popup) {
      todolist_popup.style.display = "block";
    }
  });
}
