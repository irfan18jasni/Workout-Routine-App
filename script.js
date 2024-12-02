function suggestActivity(){
    const bodyPart = document.getElementById('answer-input').value
    const result = document.getElementById('result')

    if (bodyPart == 'Legs') {
        result.innerHTML ='Here is your legs workout routine:'
        result.innerHTML ='Squats: 3 sets of 12 reps'
    }
    
    else if (bodyPart == 'Arms') {
        result.innerHTML ='Here is your arms workout routine:'
        result.innerHTML ='Bicep Curls: 3 sets of 12 reps'
    }
    
    else if (bodyPart == 'Back') {
        result.innerHTML ='Here is your back workout routine:'
        result.innerHTML ='Pull-ups: 3 sets of 8 reps'
    }
    
    else if (bodyPart == 'Chest') {
        result.innerHTML ='Here is your chest workout routine:'
        result.innerHTML ='Push-ups: 3 sets of 15 reps'
    }
    
    else {
        result.innerHTML ='Invalid body part selected!'
        result.innerHTML ='Please choose from: Legs, Arms, Back, or Chest'
}

}