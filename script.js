function calculate(event)
{
    event.preventDefault();
    const age=document.getElementById("age").value;
    let gender = "";
    if (document.getElementById("Male").checked) {
        gender = "Male";
    } else if (document.getElementById("Female").checked) {
        gender = "Female";
    }
    const heightinCM=document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    const goal=document.getElementById("goal").value;
    if(!age || !gender || !heightinCM || !weight || !goal)
    {
        alert("No input");
    }
    let heightinM=heightinCM/100;
    let bmi=weight/(heightinM*heightinM);
    let category="";
    let healthstatus;
    if(bmi<18.5){
        category="Underweight";
        healthstatus="Unhealthy"
    }
    else if(bmi>=18.5 && bmi<=24.9){
        category="Normal";
        healthstatus="Healthy"
    }
    else if(bmi>=25 && bmi<=29.9){
        category="Overweight";
        healthstatus="Needs Attention"
    }
    else{
        category="obese";
        healthstatus="Unhealthy"
    }
    let calories=0;
    if (gender=="Male")
    {
        calories=10*weight+6.25*heightinCM-5*age+5;
    }
    else
    {
        calories=10*weight+6.25*heightinCM-5*age-161;
    }
    if(goal=="wl")
        calories-=500;
    else if(goal=="wg")
        calories+=500;
    let waterIntake=weight*0.033;
    document.getElementById("result").innerHTML= `Your Results <br>BMI: ${bmi.toFixed(2)} (${category}) <br> Calories intake: ${calories} kcal/day <br> Water intake: ${waterIntake.toFixed(2)} L/day <br> Thus you are ${healthstatus}!`;
    document.getElementById("outputBox").style.display = "block"; 
}