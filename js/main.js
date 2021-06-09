var getUserName = prompt("what's your name: ");

console.log(getUserName);

document.getElementById("ShowUserName").innerText = getUserName;

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })