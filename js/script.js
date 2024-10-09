let edit = document.querySelectorAll(".fa-pen");
let trash = document.querySelectorAll(".fa-trash");

for (let i = 0; i < edit.length; i++) {
  edit[i].addEventListener("mouseover", () => {
    edit[i].classList.add("fa-beat-fade");
  });

  edit[i].addEventListener("mouseout", () => {
    edit[i].classList.remove("fa-beat-fade");
  });

  trash[i].addEventListener("mouseover", () => {
    trash[i].classList.add("fa-beat-fade");
  });

  trash[i].addEventListener("mouseout", () => {
    trash[i].classList.remove("fa-beat-fade");
  });
}

let reset = document.querySelector("button[type='reset']")

reset.addEventListener('click', () => {
    console.log("Hola");
    window.location.reload();
})
