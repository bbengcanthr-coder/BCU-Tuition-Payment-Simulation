function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle("BCU Tuition Payment Simulation");
}

function saveData(form) {
  const ss = SpreadsheetApp.openById("lrPHum4zh9_p79JgzTffKR6DIj0ZBD7M2UWJf6yP8");
  const sh = ss.getSheetByName("Sheet1");
  
  // เลขใบเสร็จสุ่ม
  const receiptNo = "BCU" + Math.floor(Math.random() * 900000 + 100000);

  let fee = 0;
  if (form.faculty === "วิศวกรรมศาสตร์") fee = 21000;
  if (form.faculty === "วิจิตรศิลป์") fee = 30000;
  if (form.faculty === "อื่นๆ") fee = 25000; // ตั้งค่าเองได้

  sh.appendRow([
    new Date(),
    form.name,
    form.studentId,
    form.faculty,
    form.major,
    form.twitter,
    fee,
    receiptNo
  ]);
  
  return {
    fee: fee,
    receiptNo: receiptNo
  };
}
