function getAndUpdate() {
    ti = document.getElementById('title').value;
    de = document.getElementById('description').value;
    if (localStorage.getItem('JS') == null) {
        itemJsonArray = [];
        itemJsonArray.push([ti, de]);

    }
    else {
        itemJsonArrayStr = localStorage.getItem('JS')
        itemJsonArray.push([ti, de]);
        localStorage.setItem('JS', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('JS') == null) {
        itemJsonArray = [];
        localStorage.setItem('JS', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('JS')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((e, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${e[0]}</td>
            <td>${e[1]}</td> 
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index}) ">Delete</button></td> 
            </tr>`;
    });
    tableBody.innerHTML = str;
}

function ChangeColor3() {
    document.getElementsByClassName('btn btn-sm btn-primary').style.backgroundColor = 'black';
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('JS')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Deleting itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('JS', JSON.stringify(itemJsonArray));
    update();

}
function clest() {
    if (confirm("Do you want to clear your list ?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}