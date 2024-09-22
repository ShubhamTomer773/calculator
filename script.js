(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Log initial elements
    console.log('Screen element:', screen);
    console.log('Buttons:', buttons);
    console.log('Clear button:', clear);
    console.log('Equal button:', equal);

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            console.log('Button clicked:', value); // Debug log
            if (value !== undefined) { // Ensure value is not undefined
                screen.value += value;
                console.log('Screen value:', screen.value); // Debug log
            }
        });
    });

    equal.addEventListener('click', function(e) {
        console.log('Equal button clicked'); // Debug log
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
                console.log('Calculation result:', answer); // Debug log
            } catch (error) {
                screen.value = "Error";
                console.log('Calculation error:', error); // Debug log
            }
        }
    });

    clear.addEventListener('click', function(e) {
        console.log('Clear button clicked'); // Debug log
        screen.value = "";
    });
})();
// const inputValue = document.getElementById("user-input");
// const number = document.querySelectorAll(".numbers").forEach(function (item) {
//     item.addEventListener("click", function (e) {
//       if (inputValue.innerText === "NaN") {
//         inputValue.innerText = "";
//       }
//       if (inputValue.innerText === "0") {
//         inputValue.innerText = "";
//       }
//       inputValue.innerText += e.target.innerHTML.trim();
//     });
//   });
//   const calculate = document
//   .querySelectorAll(".operations")
//   .forEach(function (item) {
//     item.addEventListener("click", function (e) {
//       console.log(e.target.innerHTML);
//     });
//   });
//   let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

// if (!isNaN(lastValue) && e.target.innerHTML === "=") {
//     inputValue.innerText = eval(inputValue.innerText);
// } else if (e.target.innerHTML === "AC") {
//     inputValue.innerText = 0;
// } else if (e.target.innerHTML === "DEL") {
//     inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length - 1);
//     if (inputValue.innerText.length == 0) {
//         inputValue.innerText = 0;
//     }
// } else {
//     if (!isNaN(lastValue)) {
//         inputValue.innerText += e.target.innerHTML;
//     }
// }