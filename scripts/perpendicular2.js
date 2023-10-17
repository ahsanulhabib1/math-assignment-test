function perpendicularline2(){
    const x1=document.getElementById('perpendicularity2-text1').value;
    const y1=document.getElementById('perpendicularity2-text2').value;
    const x2=document.getElementById('perpendicularity2-text3').value;
    const y2=document.getElementById('perpendicularity2-text4').value;
    const x3=document.getElementById('perpendicularity2-text3').value;
    const y3=document.getElementById('perpendicularity2-text4').value;
    const result1=document.querySelector('#perpendicularity-result21');
    const result2=document.querySelector('#perpendicularity-result22');

    const slope_PQ = (y2 - y1) / (x2 - x1);
    const slope_perpendicular = -1.0 / slope_PQ;
    const b_perpendicular = y3 - slope_perpendicular * x3;

    result1.innerHTML=`The slope of the line perpendicular to PQ is: `+parseFloat(slope_perpendicular.toFixed(3));
    result2.innerHTML=`The equation of the perpendicular line is: y = `+parseFloat(slope_perpendicular.toFixed(3))+'x+'+parseFloat(b_perpendicular.toFixed(3));

}
