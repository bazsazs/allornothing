function canScore100(answerKey, studentAnswers) { 
    for (let i = 0; i < answerKey.length; i++) { 
        if (answerKey[i] == '_' && answerKey[i] !== studentAnswers[i]) { 
            return false; } } 
            return true; 
        } 

const answerKey = ['A', 'B', '_', 'C']; 
const studentAnswers = ['A', 'B', 'D', 'C']; 
const result = canScore100(answerKey, studentAnswers); 
console.log(result);
