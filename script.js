// CPM CALCULATOR

// PPM
function calculateBMR(weight, height, age, gender) {
  if (gender === 'male') {
    return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
} else if (gender === 'female') {
    return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
}}

// HarrisBenedict(PAL)
function calculateCaloricIntake(activityLevel, BMR) {
    if (activityLevel === 'sedentary') {
      return BMR * 1.2;
    } else if (activityLevel === 'lightly active') {
      return BMR * 1.375;
    } else if (activityLevel === 'moderately active') {
      return BMR * 1.55;
    } else if (activityLevel === 'very active') {
      return BMR * 1.725;
    } else if (activityLevel === 'extra active') {
      return BMR * 1.9;
    }
  }
  
// function buttonclick with summary in the indexfile with simple validation (information in the indexfile with console.log message)
document.getElementById('button').addEventListener('click', function() {
  const form = document.getElementById('form');
  if (form.checkValidity()) {
    console.log('Formularz jest poprawnie wypełniony, wykonuję obliczenia:');
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activityLevel = document.getElementById('activity-level').value;
    const protein = document.getElementById('weight').value;
    const bulkcut = document.querySelector('input[name="bulkcut"]:checked').value;
    

    const BMR = calculateBMR(weight, height, age, gender);
    
    let caloricIntake = calculateCaloricIntake(activityLevel, BMR);
   
// calorieschanges depending on option chosen
    function addValue(bulkcut,caloricIntake) {
      if (bulkcut === 'bulk') {
        return caloricIntake+400;
      }else if (bulkcut === 'cut'){
        return caloricIntake-400;
      }else if (bulkcut === 'stay'){
        return caloricIntake;
      }
    }
caloricIntake =addValue(bulkcut,caloricIntake);
// show final results
    document.getElementById('result').innerHTML = `Powinieneś spożywać: ${Math.round(caloricIntake)} kalorii,`;

    const proteincalories = 8*weight;
    const fatcalories = caloricIntake-proteincalories;
    const fat = 0.3*fatcalories/9;
    const carb = 0.7*fatcalories/4;
    const fiber = caloricIntake*14/1000
    document.getElementById('protein').innerHTML = `${Math.round(protein)*2}g białka,`;
    document.getElementById('fat').innerHTML = `${Math.round(fat)}g tłuszczy,`;
    document.getElementById('carb').innerHTML = `${Math.round(carb)}g węglowodanów,`;
    document.getElementById('fiber').innerHTML = `${Math.round(fiber)}g błonnika.`;
    
  } else {
    //if there were error checkValidity returns false:
    document.getElementById('result').innerHTML = `Sprwadź wprowadzone dane.`.fontcolor("white");
    document.getElementById('protein').innerHTML = `Sugestia:`
    document.getElementById('fat').innerHTML = `Wypełnij wszystkie pola.`
    document.getElementById('carb').innerHTML = ``
    document.getElementById('fiber').innerHTML = ``;
    console.log('Formularz jest błędnie wypełniony');
    alert("Sprawdź wprowadzone dane")
  }
    event.preventDefault();
});


const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  location.reload();
});


