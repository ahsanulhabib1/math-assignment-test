function intercept(){
  
    const eqn1=document.getElementById('twoline-text1').value;
    const eqn2=document.getElementById('twoline-text2').value;
    const twoline_result1=document.querySelector('#twoline-result1');
    const twoline_result2=document.querySelector('#twoline-result2');
    // const intercept_result3=document.querySelector('#twoline-result3');

const coefficients1 = eqn1.match(/[-+]?\d+[xy]?/g) || [];
const coefficients2 = eqn2.match(/[-+]?\d+[xy]?/g) || [];
let a1 = 0;
let b1 = 0;
let c1 = 0; 
let a2 = 0;
let b2 = 0;
let c2 = 0;

coefficients1.forEach(term => {
  if (term.endsWith('x')) {
    a1 = parseInt(term) || 1;
  } else if (term.endsWith('y')) {
    b1 = parseInt(term) || 1;
  } else {
    c1 += parseInt(term) || 0;
  }
});

coefficients2.forEach(term => {
  if (term.endsWith('x')) {
    a2 = parseInt(term) || 1;
  } else if (term.endsWith('y')) {
    b2 = parseInt(term) || 1;
  } else {
    c2 += parseInt(term) || 0;
  }
});

let determinant = a1 * b2 - a2 * b1;

console.log(determinant);

if (determinant == 0) {
    twoline_result1.innerHTML= `The two lines are parallel and do not intersect.`;
}

else{

    let intersectionx = (c2 * b1 - c1 * b2) / determinant;
    let intersectiony = (c1 * a2 - c2 * a1) / determinant;
    let slope = -a1 / b1;
    twoline_result1.innerHTML= `The interception point is: (${parseFloat(intersectionx.toFixed(3))},${parseFloat(intersectiony.toFixed(3))})`;
    twoline_result2.innerHTML= `The equation is : y=${parseFloat(slope.toFixed(3))}x+${parseFloat((intersectiony-slope*intersectiony).toFixed(3))}`;
}
    // intercept_result3.innerHTML= `The equation of the straight line in intercept form: x/${-c/a}+y/{-c/b}=1`;


}