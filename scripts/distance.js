function distance(){
  
    const eqn=document.getElementById('distance-text').value;
    const distancex=document.querySelector('#distancex-text').value;
    const distancey=document.querySelector('#distancey-text').value;
    const distance_result=document.querySelector('#distance-result');

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

const distance = Math.abs(a * distancex + b * distancey + c) / Math.sqrt(a * a + b * b);
    distance_result.innerHTML= `Distance from the point to the line is: ${distance.toFixed(3)} unit`;

}