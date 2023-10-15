function intercept(){
  
    const eqn=document.getElementById('intercept-text').value;
    const intercept_result1=document.querySelector('#intercept-result1');
    const intercept_result2=document.querySelector('#intercept-result2');
    const intercept_result3=document.querySelector('#intercept-result3');

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

    intercept_result1.innerHTML= `The intercept of X axis is=(${-c/a},0)`;
    intercept_result2.innerHTML= `The intercept of Y axis is=(0,${-c/b})`;
    intercept_result3.innerHTML= `The equation of the straight line in intercept form: x/${-c/a}+y/{-c/b}=1`;


}