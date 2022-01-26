
// Selection of elements

const container = document.querySelector(".container");
const scoreForm = document.querySelector(".score-form");
const titleForm = document.querySelector(".title-form");
const score = document.querySelector(".score");
const btnScore = document.querySelector(".btn-score");
const msgContainer = document.querySelector(".msg-container");
const msgSquare = document.querySelector(".msg-square");
const msgExScore = document.querySelector(".msg-exam-score");
const msgSubScore = document.querySelector(".msg-subj-score");



// Listener that gets executed when clicking on the "Send Score" buttoon

btnScore.addEventListener("click", () => {
    
    let result, msg;

    try {
        result = score.value;
        
        if (isNaN(result)) {
            throw "Syntax Error";
        }
        if (parseInt(result) < 1 || parseInt(result) > 10) {
            throw "Score must be a number between 1 and 10";
        }

        approveDesapprove(8, 7, result);
    }
    catch(error) {
        msg = error;
        showResultMsg(msg);
    }

    
});


// Function that evaluates if ths student has passed the course and gives some feedback about the final exam

const approveDesapprove = (prc, cla, exam) => {

    let msgExamScore, msgSubjectScore;
    let prcScore = parseInt(prc);
    let classScore = parseInt(cla);
    let examScore = parseInt(exam);


    switch(examScore) {
        case 1: {msgExamScore = "What are you doing with your live?"; break;}
        case 2: {msgExamScore = "You suck man!"; break;}
        case 3: {msgExamScore = "Don't try this again please"; break;}
        case 4: {msgExamScore = "You failed the exam"; break;}
        case 5: {msgExamScore = "Well, pretty mediocre"; break;}
        case 6: {msgExamScore = "Yo need to study a bit more"; break;}
        case 7: {msgExamScore = "Well, but it could be better"; break;}
        case 8: {msgExamScore = "Great, you passed the exam"; break;}
        case 9: {msgExamScore = "Congratulations! Well Done!"; break;}
        case 10: {msgExamScore = "You're the best, could you put your autograph in my t-shirt?"; break;}
    }
    let avgScore = Math.round((prcScore + classScore + examScore)/3);

    if (avgScore < 7){
        msgSubjectScore = "DESAPPROVED";
        msgSubScore.style.color = "red";
    }
    else {
        msgSubjectScore = "APPROVED";
        msgSubScore.style.color = "green";
    }

    msgSubScore.innerHTML = msgSubjectScore;
    msgExScore.innerHTML = "<b>Final Exam Feedback:</b> " + msgExamScore;
    msgContainer.style.display = "flex";

} 


// Function which helps the listener to show on console the result of the final exam, and a message that tells the user if the introduced data it's ok or not

const showResultMsg = (mess) => {
    alert(mess + ", try again!");
};