function calculateIntersection(line1, line2) {

let a1 = 0;
let b1 = 0;
let c1 = 0;
let a2 = 0;
let b2 = 0;
let c2 = 0; 

const coefficients1 = line1.match(/[-+]?\d+[xy]?/g) || [];
const coefficients2 = line2.match(/[-+]?\d+[xy]?/g) || [];

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

    const intersection = { x: 0, y: 0 };
    const determinant = a1 * b2 - a2 * b1;
    if (determinant === 0) {
        console.error("Lines are parallel. No intersection.");
        process.exit(1);
    }
    intersection.x = (b1 * c2 - c1 * b2) / determinant;
    intersection.y = (c1 * a2 - a1 * c2) / determinant;
    return intersection;
}

function calculateDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function area(){

  
    const eqn1=document.getElementById('area-text1').value;
    const eqn2=document.getElementById('area-text2').value;
    const eqn3=document.getElementById('area-text3').value;
    const area_result=document.querySelector('#area-result');

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
  
    
    const lines = [
    { a: a1, b: b1, c: c1 }, 
    { a: a2, b: b2, c: c2 }, 
    { a: a3, b: b3, c: c3 },
];

const intersectionPoints = [{}, {}, {}];
const sideLengths = [];

for (let i = 0; i < 3; ++i) {
    const nextIndex = (i + 1) % 3;
    intersectionPoints[i] = calculateIntersection(lines[i], lines[nextIndex]);
    sideLengths[i] = calculateDistance(intersectionPoints[i], intersectionPoints[nextIndex]);
}

const s = (sideLengths[0] + sideLengths[1] + sideLengths[2]) / 2;
const area = Math.sqrt(s * (s - sideLengths[0]) * (s - sideLengths[1]) * (s - sideLengths[2]));

area_result.innerHTML= `The area of the triangle formed by the three lines is: ${area}`;

}