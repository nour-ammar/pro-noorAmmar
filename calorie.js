
function messageBmi(name,gender,age,height,weight){

	var bmi = weight/(height*height);
	var bmi = bmi.toFixed(2)
	var bmF =  (9.740 * weight) + (172.9 * (height*0.01) ) -(4.737 * age ) + 667.05 ;
	var bmF = bmF.toFixed(2)
	var bmM = (13.707 * weight) + (492.3 * (height*0.01) ) - (6.673 * age ) + 77.607 ;
	var bmM = bmM.toFixed(2)
        if (bmi < 18.5){
        	if (gender==='male'){
        	 return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Underweight category you have to pay attention to your body man. this is your basal metabolism '+ bmM +' calories.' 
        	} else 
        	if (gender==='female'){
             return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Underweight category you have to pay attention to your body beautiful. this is your basal metabolism '+ bmF +' calories.' 
        	}
        } else 
		if(18.5 < bmi  &&  bmi < 24.9){
			if (gender==='male'){
        	 return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Normal weigh category you are perfect man you must be proud. this is your basal metabolism '+ bmM +' calories.' 
        	} else 
        	if (gender==='female'){
             return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Normal weigh category you are perfect beautiful you must be proud. this is your basal metabolism '+ bmF +' calories.' 
        	}
        }else 
		if(25 < bmi && bmi < 29.9){
			if (gender==='male'){
        	 return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Overweight category you have to pay attention to your body man. this is your basal metabolism '+ bmM +' calories.' 
        	} else 
        	if (gender==='female'){
             return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Overweight category you have to pay attention to your body beautiful. this is your basal metabolism '+ bmF +' calories.' 
        	}
		} else 
		if (bmi > 30){
			if (gender==='male'){
        	 return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Obesity category you have to pay attention to your body man. this is your basal metabolism '+ bmM +' calories.' 
        	} else 
        	if (gender==='female'){
             return '"Hey" '+name+' your BMI is : '+bmi+' you are in the Obesity category you have to pay attention to your body beautiful. this is your basal metabolism '+ bmF +' calories.' 
        	} 
        }
        return 'error'
			
		
};
function changeCtD(weightOrHeight){
	var x= weightOrHeight.toString().split('');
	for(var i = 0 ; i < x.length ; i++){
		if(x[i]===','){
		    x[i] = '.'
		}
	}
	return Number(x.join(''));
};



 



