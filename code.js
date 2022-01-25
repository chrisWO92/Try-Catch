
// Selection of elements

const container = document.querySelector(".container");
const scoreForm = document.querySelector(".score-form");
const titleForm = document.querySelector(".title-form");
const score = document.querySelector(".score");
const btnScore = document.querySelector(".btn-score");


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
        approveDesapprove(8, 4, result);
    }
    catch(error) {
        msg = error;
    }

    showResultMsg(result, msg);
});

const approveDesapprove = (prcScore, classScore, examScore) => {

    let msgExamScore, msgSubjectScore;

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

    return [avgScore, msgExamScore, msgSubjectScore];
} 

const showResultMsg = (res, mess) => {
    console.log(res);
    console.log(mess);
};