function parellelism(){
  
    const eqn1=document.getElementById('parellelism-text1').value;
    const eqn2=document.getElementById('parellelism-text2').value;
    const parellelism_result=document.querySelector('#parellelism-result');

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

if (a1*b2 == b1*a2) {
    parellelism_result.innerHTML= `The two lines are parallel.`;
}

else 
parellelism_result.innerHTML= `The two lines are not parallel.`;
}