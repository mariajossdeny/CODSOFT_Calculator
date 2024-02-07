//variables for calculator screen and buttons

const display= document.querySelector(".display");
const buttons = document.querySelectorAll("button");

//function to create the calculator logic, applying conditionals, click event and eval(), to solve arithmetic operations.
buttons.forEach((btn => {
    btn.addEventListener("click", () => {
      const clickBotton = btn.textContent;

      if(btn.id === "de"){
        display.textContent = "0";
        return;
      };
      if(btn.id === "ac"){
        if(display.textContent.length === 1 || display.textContent === "Error!") {
            display.textContent = "0";
            return;
        }else { 
          display.textContent = display.textContent.slice(0, -1);
          return;
        }
      };
      if(btn.id === "=") {
        try {
            display.textContent = eval(display.textContent);

        } catch {
            display.textContent = "Error!";
        }
        return;
      };
       if(display.textContent === "0" ||  display.textContent === "Error!"){
             display.textContent = clickBotton;
       } else {
        display.textContent += clickBotton;
       };
    });

   
}));