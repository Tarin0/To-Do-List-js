let count = 0;

const addButton = () => {
    const textInput = document.getElementById("input-text");
    const text = textInput.value;
    // console.log(text);
    count++;

    const contentContainer = document.getElementById("content-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <th class="text-base">${count}</th>
            <td class="text-xl" id="task-info">${text}</td>
            <td>
            <button class="done-btn btn btn-warning btn-xs">Done</button>
            <button class="delete-btn btn btn-error btn-xs">Delete</button>
            </td>
   `;
    textInput.value = '';
    contentContainer.appendChild(tr);
    const doneButtons = document.querySelectorAll(".done-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");
    //    console.log(doneButtons);
    for (let btn of doneButtons) {
        btn.addEventListener("click", function (event) {
            event.target.parentElement.parentElement.style.textDecoration =
                "line-through";
        });
    }
    for (let btn of deleteButtons) {
        btn.addEventListener("click", function (event) {
            event.target.parentElement.parentElement.style.display = "none";
        });
    }
};

const doneButton = () => {
    const textInfo = document.getElementById("task-info");
    console.log(textInfo);
    textInfo.style.textDecoration = "line-through";
};

document.querySelector("#clear-btn").addEventListener("click", function (event) {
    // console.log(event);
    event.target.parentElement.parentElement.children[0].children[1].style.display ="none";
    event.target.style.display = "none";
  });