function equation(){
  
    const eqn=document.getElementById('eq1text').value;
    const res=document.getElementById('result');
    if (eqn.length < 5) {
    res.innerHTML="Invalid equation format. Please use 'y = constant' or 'x = constant' format.";
} else {
    // Extract the relevant parts of the equation
    const lhs = eqn.substring(0, 2);
    const rhs = eqn.substring(4);
        if (lhs === "y " && rhs !== "") {
        res.innerHTML="The equation represents a line parallel to the x-axis.";
    } else if (lhs === "x " && rhs !== "") {
        res.innerHTML="The equation represents a line parallel to the y-axis.";
    } else {
        res.innerHTML="Invalid equation format. Please use 'y = constant' or 'x = constant' format.";
    }
}
}
