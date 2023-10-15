function concurrency(){
  
    const eqn1=document.getElementById('concurrency-text1').value;
    const eqn2=document.getElementById('concurrency-text2').value;
    const eqn3=document.getElementById('concurrency-text3').value;
    const concurrency_result=document.querySelector('#concurrency-result');

const coefficients1 = eqn1.match(/[-+]?\d+[xy]?/g) || [];
const coefficients2 = eqn2.match(/[-+]?\d+[xy]?/g) || [];
const coefficients3 = eqn3.match(/[-+]?\d+[xy]?/g) || [];
let a1 = 0;
let b1 = 0;
let c1 = 0; 
let a2 = 0;
let b2 = 0;
let c2 = 0;
let a3 = 0;
let b3 = 0;
let c3 = 0;

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

coefficients3.forEach(term => {
    if (term.endsWith('x')) {
      a3 = parseInt(term) || 1;
    } else if (term.endsWith('y')) {
      b3 = parseInt(term) || 1;
    } else {
      c3 += parseInt(term) || 0;
    }
  });

let determinant = a1 * (b2 * c3 - c2 * b3)- b1 * (a2 * c3 - c2 * a3)+ c1 * (a2 * b3 - b2 * a3);

if (determinant == 0) {
    concurrency_result.innerHTML= `The lines are concurrent.`;
}

else{

    concurrency_result.innerHTML= `The lines are not concurrent.`;
}
}