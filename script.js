const button = document.querySelectorAll(".Btn")
const counterDisplay = document.querySelector(".Number-display")

let count = 0;

button.forEach((btn) => {
  btn.addEventListener("click", () =>{

      const classList = btn.classList

      if (classList.contains("Decrease-btn")) count--;
      else if(classList.contains("Increase-btn")) count++;
      else count = 0;


      if(count > 0 ) counterDisplay.style.color = "green";
      else  counterDisplay.style.color = "red";
      
      if( count === 0) counterDisplay.style.color = "gray";

      counterDisplay.textContent = count;  
      
    })
})
