function perpendicularline(){
    const eqn=document.getElementById('perpendicularity-text1').value;
    const x0=document.getElementById('perpendicularity-text2').value;
    const y0=document.getElementById('perpendicularity-text3').value;
    const area_result=document.querySelector('#perpendicularity-result1');

    let line=findCoefficient(eqn);

    let m_given = -line.a / line.b;
    let m_perpendicular = -1.0 / m_given;
    let b_perpendicular = y0 - m_perpendicular * x0;

    area_result.innerHTML=`The equation of the perpendicular line is: ${parseFloat(m_perpendicular.toFixed(3))}x -y + ${parseFloat(b_perpendicular.toFixed(3))} = 0`;
}