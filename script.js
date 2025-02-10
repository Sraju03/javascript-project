document.getElementById("calculate").addEventListener("click", function () {
  const fv = parseFloat(document.getElementById("fv").value);
  const sv = parseFloat(document.getElementById("sv").value);
  const operation = document.getElementById("option").value;
  let result;

  if (!operation) {
    document.getElementById("ans").value = "Please select an operation!";
    return;
  }
  switch (operation) {
    case "add":
      result = fv + sv;
      break;
    case "sub":
      result = fv - sv;
      break;
    case "mul":
      result = fv * sv;
      break;
    case "div":
      if (sv !== 0) {
        result = fv / sv;
      } else {
        result = "Error: Division by zero";
      }
      break;
    case "mod":
      result = fv % sv;
      break;
    case "inc":
      result = fv + 1;
      break;
    case "dec":
      result = fv - 1;
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("ans").value = result;
});

// calculator overlay---------------
const overlay = document.getElementById("overlay");
//  const showOverlayButton = document.getElementById("showOverlay");
const closeOverlayButton = document.getElementById("closeOverlay");
const viewBtn = document.getElementsByClassName("class-view");
// Show the overlay
// showOverlayButton.addEventListener("click", function () {
//   overlay.style.display = "flex";
// });

Array.from(viewBtn).forEach((element) => {
//   debugger;
  element.addEventListener("click", function () {
    overlay.style.display = "flex";
  });
});

// Close the overlay
closeOverlayButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

// Close the overlay when clicking outside the content
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

//  calculator overlay ends------------
