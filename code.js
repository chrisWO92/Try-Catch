
// Selection of elements

const container = document.querySelector(".container");
const scoreForm = document.querySelector(".score-form");
const titleForm = document.querySelector(".title-form");
const score = document.querySelector(".score");
const btnScore = document.querySelector(".btn-score");


// Listener that gets executed when clicking on the "Send Score" buttoon

btnScore.addEventListener("click", () => {
    
    let result, msg;

    try {
        result = score.value;
        
        if (isNaN(result)) {
            throw "ERROR";
        }
        else if (parseInt(result) < 1 || parseInt(result) > 10) {
            throw "Score must be a number between 1 and 10";
        }
        else {
            msg = "Correct data";
        }
        approveDesapprove(8, 7, result);
    }
    catch(error) {
        msg = error;
    }

    showResultMsg(result, msg);
});


// Function that evaluates if ths student has passed the course and gives some feedback about the final exam

const approveDesapprove = (prc, cla, exam) => {

    let msgExamScore, msgSubjectScore;
    let prcScore = parseInt(prc);
    let classScore = parseInt(cla);
    let examScore = parseInt(exam);


    switch(examScore) {
        case 1: msgExamScore = "What are you doing with your live?";
        case 2: msgExamScore = "You suck man!";
        case 3: msgExamScore = "Don't try this again please";
        case 4: msgExamScore = "You failed the exam";
        case 5: msgExamScore = "Well, pretty mediocre";
        case 6: msgExamScore = "Yo need to study a bit more";
        case 7: msgExamScore = "Well, but it could be better";
        case 8: msgExamScore = "Great, you passed the exam";
        case 9: msgExamScore = "Congratulations! Well Done!";
        case 10: msgExamScore = "You're the best, could you put your autograph in my t-shirt?";
    }
    let avgScore = (prcScore + classScore + examScore)/3;

    if (avgScore < 7){
        msgSubjectScore = "DESAPPROVED";
    }
    else {
        msgSubjectScore = "APPROVED";
    }

    console.log(avgScore);
    console.log(msgExamScore);
    console.log(msgSubjectScore);
} 


// Function which helps the listener to show on console the result of the final exam, and a message that tells the user if the introduced data it's ok or not

const showResultMsg = (res, mess) => {
    console.log(res);
    console.log(mess);
};