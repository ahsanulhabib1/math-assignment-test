function perpendicularline3(){
    const eqn1=document.getElementById('perpendicularity3-text1').value;
    const eqn2=document.getElementById('perpendicularity3-text2').value;
    const perpendicular_result3=document.querySelector('#perpendicularity3-result1');

    let line1=findCoefficient(eqn1);
    let line2=findCoefficient(eqn2);

    let slope1 = -line1.a / line1.b;
    let slope2 = -line2.a / line2.b;

    if (Math.abs(slope1 * slope2+1) <1e-6) {
        perpendicular_result3.innerHTML="The two lines are perpendicular.";
    } else {
        perpendicular_result3.innerHTML="The two lines are not perpendicular.";
    }

}

