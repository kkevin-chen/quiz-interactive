// Quiz Script
'use strict';

// Event Listener
document.getElementById('submit').addEventListener('click', markAnswers);

//Event Function
function markAnswers() {

    // Undo Previous Responses
    document.getElementById('q1').className = '';
    document.getElementById('q2').className = '';
    document.getElementById('q3').className = '';
    document.getElementById('q4').className = '';

    // Input: Retrieve Answers (conerts to lowercase for easier checking)
    let question1 = document.getElementById('quest1').value.toLowerCase();
    let question2 = document.getElementById('quest2').value.toLowerCase();
    let q3Bool = document.getElementById('chicken').checked;
        // q3 automatically gets stored as boolean in one step
    let question4 = document.getElementById('quest4').value.toLowerCase();

    // Processing: Checking Right or wrong (storing this a boolean value)
    let q1Bool = (question1 == 'india') || (question1 == 'bharat');
    let q2Bool = (question2 == 'cow') || (question2 == 'cattle') || (question2 == 'cows');
    let q4Bool = (question4 == 'rice');

    // Mark Quiz
    let count = 0;
    let wrongSentence = 'You got these questions wrong:';

    if (q1Bool) {
        count++;
        document.getElementById('q1').classList.add('right');
    } else {
        document.getElementById('q1').classList.add('wrong');
        wrongSentence += ' 1';
    }

    if (q2Bool) {
        count++;
        document.getElementById('q2').classList.add('right');
    } else {
        document.getElementById('q2').classList.add('wrong');
        wrongSentence += ' 2';
    }

    if (q3Bool) {
        count++;
        document.getElementById('q3').classList.add('right');
    } else {
        document.getElementById('q3').classList.add('wrong');
        wrongSentence += ' 3';
    }

    if (q4Bool) {
        count++;
        document.getElementById('q4').classList.add('right');
    } else {
        document.getElementById('q4').classList.add('wrong');
        wrongSentence += ' 4';
    }

    // Calculate Mark and Display Results
    document.getElementById('mark').innerHTML = count
    document.getElementById('mark-percent').innerHTML = (count/0.04);

    if (count == 4) {
        wrongSentence = 'Great Job! You got all of them right!';
        document.getElementById('feedback').style.color = 'green';
    } else if (count == 0) {
        wrongSentence = 'That was a really easy test. How did you get none of them right? Try again! ' + wrongSentence;
        document.getElementById('feedback').style.color = 'red';
    } else {
        wrongSentence = 'You got some questions wrong. Try again.  ' + wrongSentence;
        document.getElementById('feedback').style.color = 'red';
    }
    document.getElementById('feedback').innerHTML = wrongSentence;
    alert(wrongSentence);
}