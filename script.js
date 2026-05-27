function updateDashboard(){

    let students =
    Math.floor(Math.random() * 500) + 100;

    let courses =
    Math.floor(Math.random() * 20) + 5;

    let teachers =
    Math.floor(Math.random() * 50) + 10;

    let placement =
    Math.floor(Math.random() * 20) + 80;

    document.getElementById("students").innerText =
    students;

    document.getElementById("courses").innerText =
    courses;

    document.getElementById("teachers").innerText =
    teachers;

    document.getElementById("placement").innerText =
    placement + "%";

    alert("Dashboard Updated Successfully!");
}

/* Live Time */

setInterval(() => {

    const now = new Date();

    document.getElementById("time").innerText =
    now.toLocaleTimeString();

}, 1000);