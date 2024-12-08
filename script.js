function suggestActivity(){
    const bodyPart = document.getElementById('answer-input').value.toLowerCase()
    const result = document.getElementById('result')
    const img = document.getElementById('exercise-img')

    const workout = {
        'Legs': ['Squats: 3x12','https://cdn-icons-png.flaticon.com/512/5848/5848884.png'],
        'Arms': ['Bicep Curl: 3x12','https://cdn-icons-png.flaticon.com/512/8855/8855373.png'],
        'Back': ['Pull-ups: 3x8','https://cdn-icons-png.flaticon.com/512/83/83065.png'],
        'Chest': ['Push-ups: 3x15','https://cdn-icons-png.flaticon.com/512/2548/2548536.png']
    }

    if (workout[bodyPart]) {
        result.innerHTML = workout[bodyPart][0]
        img.src = workout[bodyPart][1]
    }
    else {
        result.innerHTML = 'Please choose: Legs, Arms, Back, or Chest'
    }


//     if (bodyPart == 'Legs') {
        
//         result.innerHTML ='Here is your legs workout routine:'
//         result.innerHTML ='Squats: 3 sets of 12 reps'
//     }
    
//     else if (bodyPart == 'Arms') {
//         result.innerHTML ='Here is your arms workout routine:'
//         result.innerHTML ='Bicep Curls: 3 sets of 12 reps'
//     }
    
//     else if (bodyPart == 'Back') {
//         result.innerHTML ='Here is your back workout routine:'
//         result.innerHTML ='Pull-ups: 3 sets of 8 reps'
//     }
    
//     else if (bodyPart == 'Chest') {
//         result.innerHTML ='Here is your chest workout routine:'
//         result.innerHTML ='Push-ups: 3 sets of 15 reps'
//     }
    
//     else {
//         result.innerHTML ='Invalid body part selected!'
//         result.innerHTML ='Please choose from: Legs, Arms, Back, or Chest'
// }

// 
}