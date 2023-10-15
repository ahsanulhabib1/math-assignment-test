function polar(){
  
        const r1=document.getElementById('polar-text11').value;
        const t1=document.getElementById('polar-text12').value;
        const r2=document.getElementById('polar-text21').value;
        const t2=document.getElementById('polar-text22').value;
        const polar_result=document.querySelector('#polar-result');


       let x1 = r1 * Math.cos(t1);
       let y1 = r1 * Math.sin(t1);
       let x2 = r2 * Math.cos(t2);
       let y2 = r2 * Math.sin(t2);
        
        const m = (y2 - y1) / (x2 - x1);
        
        let a = m;
        let b = -1;
        let c = y1 - m * x1;
        
        polar_result.innerHTML=`The equation of the line passing through the given points in Cartesian form is: ${parseFloat(a.toFixed(3))}x + ${parseFloat(b.toFixed(3))}y + ${parseFloat(c.toFixed(3))} = 0`;

    }