/* =========================
   WEBSITE JAVASCRIPT
========================= */


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    document.getElementById("success-message").textContent =
        "Message sent successfully! Thank you.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}


/* =========================
   TEXT TO SPEECH
========================= */

function speak(text) {

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 0.8;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}


/* =========================
   LEARNING PROGRESS
========================= */

function updateProgress() {

    const lessons = [

        "beginnerCompleted",
        "speakingCompleted",
        "listeningCompleted",
        "grammarCompleted",
        "vocabularyCompleted",
        "pronunciationCompleted"

    ];

    let completed = 0;


    lessons.forEach(function(lesson) {

        if (localStorage.getItem(lesson) === "true") {

            completed++;

        }

    });


    const total = lessons.length;

    const percentage =
        (completed / total) * 100;


    const progressText =
        document.getElementById("progress-text");

    const progressFill =
        document.getElementById("progress-fill");


    if (progressText) {

        progressText.textContent =
            completed + " / " + total + " lessons completed";

    }


    if (progressFill) {

        progressFill.style.width =
            percentage + "%";

    }

}


/* =========================
   COMPLETE LESSON
========================= */

function completeLesson(lessonName) {

    localStorage.setItem(
        lessonName + "Completed",
        "true"
    );

    const message =
        document.getElementById("completion-message");


    if (message) {

        message.textContent =
            "Lesson completed! ✅";

    }

}


/* =========================
   CHECK LESSON COMPLETION
========================= */

function checkLessonCompletion(lessonName) {

    const completed =
        localStorage.getItem(
            lessonName + "Completed"
        );


    const message =
        document.getElementById("completion-message");


    if (completed === "true" && message) {

        message.textContent =
            "Lesson already completed! ✅";

    }

}


/* =========================
   QUIZ
========================= */

function checkQuiz() {

    let score = 0;


    /* =========================
       CORRECT ANSWERS
    ========================= */

    const answers = {

        q1: "Book",

        q2: "Water",

        q3: "I am happy.",

        q4: "Small",

        q5: "am",

        q6: "خانه",

        q7: "Water",

        q8: "Cold",

        q9: "is",

        q10: "Book",

        q11: "are",

        q12: "Bad",

        q13: "Mother",

        q14: "has",

        q15: "Friend",

        q16: "She likes tea.",

        q17: "Slow",

        q18: "study",

        q19: "Father",

        q20: "speak"

    };


    /* =========================
       CHECK ALL 20 QUESTIONS
    ========================= */

    for (let question in answers) {

        const selected =
            document.querySelector(
                'input[name="' + question + '"]:checked'
            );


        if (
            selected &&
            selected.value === answers[question]
        ) {

            score++;

        }

    }


    /* =========================
       SHOW SCORE
    ========================= */

    const result =
        document.getElementById("quiz-result");


    if (result) {

        result.textContent =
            "Your score: " + score + " / 20";

    }

}


/* =========================
   DARK MODE
========================= */

function setupDarkMode() {

    const darkModeToggle =
        document.getElementById("dark-mode-toggle");


    /* =========================
       LOAD SAVED DARK MODE
    ========================== */

    if (
        localStorage.getItem("darkMode") === "true" &&
        darkModeToggle
    ) {

        darkModeToggle.checked = true;

    }


    /* =========================
       SAVE DARK MODE CHOICE
    ========================== */

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "change",
            function() {

                localStorage.setItem(
                    "darkMode",
                    darkModeToggle.checked
                );

            }
        );

    }

}


/* =========================
   START PROGRESS
========================= */

updateProgress();


/* =========================
   START DARK MODE
========================= */

setupDarkMode();