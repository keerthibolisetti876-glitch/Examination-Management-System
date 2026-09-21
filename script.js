// Login Modal

function showLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}


// Login

function login() {

    document.getElementById("loginMessage").innerText =
        "Login successful! Welcome to ExamPro.";

}


// Start Exam

function startExam() {

    document.getElementById("onlineexam").scrollIntoView({
        behavior: "smooth"
    });

}


// Hall Ticket Print

function printHallTicket() {

    window.print();

}


// Exam Timer

let time = 300;

let timerInterval = setInterval(function () {

    let minutes = Math.floor(time / 60);

    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText =
        minutes + ":" + seconds;

    if (time <= 0) {

        clearInterval(timerInterval);

        alert("Time is over! Your exam has been submitted.");

    }

    time--;

}, 1000);


// Submit Exam

function submitExam() {

    let answer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!answer) {

        alert("Please select an answer.");

        return;
    }

    if (answer.value === "HTML") {

        alert("Correct Answer! Exam submitted successfully.");

    } else {

        alert("Exam submitted. Please check your result.");

    }

    clearInterval(timerInterval);

}