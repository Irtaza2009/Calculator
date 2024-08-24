function solveQuadratic() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid numbers for a, b, and c");
    return;
  }

  const discriminant = b * b - 4 * a * c;

  let x1, x2;
  if (discriminant < 0) {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    x1 = `${realPart} + ${imaginaryPart}i`;
    x2 = `${realPart} - ${imaginaryPart}i`;
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    x1 = ((-b + sqrtDiscriminant) / (2 * a)).toFixed(2);
    x2 = ((-b - sqrtDiscriminant) / (2 * a)).toFixed(2);
  }

  document.getElementById("result1").innerText = x1;
  document.getElementById("result2").innerText = x2;
}
