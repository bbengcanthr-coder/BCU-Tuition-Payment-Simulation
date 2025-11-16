async function submitForm() {
  const data = {
    name: document.getElementById("name").value,
    studentId: document.getElementById("studentId").value,
    faculty: document.getElementById("faculty").value,
    major: document.getElementById("major").value,
    twitter: document.getElementById("twitter").value
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbxBVUF7xLpxLqsEUX0FqZRT3EDW3FQO72IrnvrfD81G0EylO_Xs04JkIMk7PLenwjmZ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  const result = await response.json();

  // Redirect ไปหน้าใบเสร็จ
  window.location.href = `receipt.html?fee=${result.fee}&id=${result.receiptNo}&name=${data.name}`;
}

