function findCoefficient(equation)
{
    const coefficients = equation.match(/[-+]?\d+[xy]?/g) || [];
    let _a = 0;
let _b = 0;
let _c = 0; 

coefficients.forEach(term => {
  if (term.endsWith('x')) {
      _a = parseInt(term) || 1;
  } else if (term.endsWith('y')) {
    _b = parseInt(term) || 1;
  } else {
    _c += parseInt(term) || 0;
}
});

console.log(_a);
let coeff={a:_a,b:_b,c:_c};
 return coeff;

}

function findIntersectionArea(line1, line2, line3) {
    const intersection12 = findIntersectionPoint(line1, line2);
    const intersection13 = findIntersectionPoint(line1, line3);
    const intersection23 = findIntersectionPoint(line2, line3);
    const area = calculateTriangleArea(intersection12, intersection13, intersection23);
    return area;
}


function findIntersectionPoint(line1, line2) {
    const x = (line1.b * line2.c - line2.b * line1.c) / (line1.a * line2.b - line2.a * line1.b);
    const y = (-line1.a * x - line1.c) / line1.b;
    return { x, y };
}

function calculateTriangleArea(point1, point2, point3) {
    const area = 0.5 * Math.abs(
        point1.x * (point2.y - point3.y) +
        point2.x * (point3.y - point1.y) +
        point3.x * (point1.y - point2.y)
    );

    return area;
}


function area(){
    const eqn1=document.getElementById('area-text1').value;
    const eqn2=document.getElementById('area-text2').value;
    const eqn3=document.getElementById('area-text3').value;
    const area_result=document.querySelector('#area-result');

    const line1 = findCoefficient(eqn1);
    const line2 = findCoefficient(eqn2);
    const line3 = findCoefficient(eqn3);

    const areaof = findIntersectionArea(line1, line2, line3);

    area_result.innerHTML= `The area of the triangle formed by the three lines is: ${parseFloat(areaof.toFixed(5))}`;

}