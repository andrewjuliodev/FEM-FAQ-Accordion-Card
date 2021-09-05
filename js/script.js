// accordion        accordion
// container        contentBx
// questionRow      label
// answer           content

const accordion = document.getElementsByClassName("container");
const container = document.querySelectorAll(".container");

function faq() {}

for (let i = 1; i < accordion.length + 1; i++) {
  document.querySelector(`.q${i}`).addEventListener("click", function () {
    if (document.querySelector(`.cont${i}`).style.height === "55px") {
      for (let i = 1; i < accordion.length + 1; i++) {
        if (document.querySelector(`.cont${i}`).style.height === "100px") {
          document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
          document.querySelector(`.cont${i}`).style.height = "55px";
          document.querySelector(`.a${i}`).style.display = "none";
        }
      }
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(-1)";
      document.querySelector(`.cont${i}`).style.height = "100px";
      document.querySelector(`.a${i}`).style.display = "block";
    } else {
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
      document.querySelector(`.cont${i}`).style.height = "55px";
      document.querySelector(`.a${i}`).style.display = "none";
    }
  });
}

for (let i = 1; i < accordion.length + 1; i++) {
  document.querySelector(`.arrow${i}`).addEventListener("click", function () {
    if (document.querySelector(`.cont${i}`).style.height === "55px") {
      for (let i = 1; i < accordion.length + 1; i++) {
        if (document.querySelector(`.cont${i}`).style.height === "100px") {
          document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
          document.querySelector(`.cont${i}`).style.height = "55px";
          document.querySelector(`.a${i}`).style.display = "none";
        }
      }
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(-1)";
      document.querySelector(`.cont${i}`).style.height = "100px";
      document.querySelector(`.a${i}`).style.display = "block";
    } else {
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
      document.querySelector(`.cont${i}`).style.height = "55px";
      document.querySelector(`.a${i}`).style.display = "none";
    }
  });
}
