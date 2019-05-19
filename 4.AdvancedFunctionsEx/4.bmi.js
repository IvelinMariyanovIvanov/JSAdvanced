function solve(name, age, weightKg, heighCm) {

    const calcBmi = (weight, heigh)=> {
        return Math.round(weight / heigh**2);
    }

    let generateStatus = (bmi)=> {
        if(bmi < 18.5){
            return 'underweight';
        } else if(bmi < 25){
            return 'normal';
        } else if(bmi < 30) {
            return 'overweight';
        } else 
            return'obese';
        }

        const bmi = calcBmi(weightKg , heighCm / 100);

        let chart = {
            name,
            personalInfo:{
                age: age,
                weight: weightKg,
                height: heighCm   
            },
            BMI : bmi,
            status : generateStatus(bmi)
        }
    
        if(chart.status === 'obese'){
            chart.recommendation  = 'admission required';
        }
    
        return chart;
}


console.log(solve('Honey Boo Boo', 9, 57, 137))

