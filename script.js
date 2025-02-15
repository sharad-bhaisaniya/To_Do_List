const inp = document.querySelector("#search-input");
const list = document.querySelector("#list-data");

function addData() {
  if (inp.value === "") {
    alert("Please enter a value");
    return;
  } else {
    const data = inp.value;
    // Create a span element
    const span = document.createElement("span");
    span.innerHTML = "❎";
    // Create a li element
    const li = document.createElement("li");

    li.innerHTML += data;
    // Append span to li
    list.appendChild(li);
    // Append li to list
    li.appendChild(span);

    //    Remove the item from the list
    span.addEventListener("click", () => {
      list.removeChild(li);
    });

    inp.value = "";
    // Save the data to local storage
    localStorage.setItem("data", list.innerHTML);
  }
}

// Delete item from the list
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    localStorage.setItem("data", list.innerHTML);
  }
});
// Get the data from local storage
list.innerHTML = localStorage.getItem("data");
