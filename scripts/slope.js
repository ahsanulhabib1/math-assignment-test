function slope1(){
  
    const eqn=document.getElementById('slope1-text').value;
    const slope_result1=document.querySelector('#slope-result1');

// Use a regular expression to match and extract coefficients
const coefficients = eqn.match(/[-+]?\d+[xy]?/g) || [];
let a = 0;
let b = 0;
let c = 0; 

coefficients.forEach(term => {
  if (term.endsWith('x')) {
    a = parseInt(term) || 1;
  } else if (term.endsWith('y')) {
    b = parseInt(term) || 1;
  } else {
    c += parseInt(term) || 0;
  }
});

if (b == 0){
  slope_result1.innerHTML= "The line is vertical, and the slope is undefined.";
}

else {
    slope_result1.innerHTML= `The slope of the line is: ${-a/b}`;
}

}

function slope2(){
  
  const x=document.getElementById('slope2-text1').value;
  const y=document.getElementById('slope2-text2').value;
  const m=document.getElementById('slope2-text3').value;
  const slope_result2=document.querySelector('#slope-result2');

  slope_result2.innerHTML=`The equation of the straight line is: y = $(d)x + $(y - m*x)")`

}