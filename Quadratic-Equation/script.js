function solveQuadratic() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid numbers for a, b, and c");
    return;
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    alert("No real roots exist for the given values");
    return;
  }

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const x1 = (-b + sqrtDiscriminant) / (2 * a);
  const x2 = (-b - sqrtDiscriminant) / (2 * a);

  document.getElementById("result1").innerText = x1.toFixed(2);
  document.getElementById("result2").innerText = x2.toFixed(2);
}
