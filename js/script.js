function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value); // mengambil input berat
  const height = parseFloat(document.getElementById('height').value) / 100; // mengambil input tinggi dan konversi tinggi ke dalam satuan meter
  const gender = document.getElementById('gender').value; // mengambil input jenis kelamin

  // Validasi jika input berat, tinggi atau jenis kelamin tidak diisi/dipilih
  if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
    if (gender) {
      const bmi = weight / (height * height);
      displayResult(bmi, gender);
    } else {
      alert('Silahkan pilih jenis kelamin.');
    }
  } else {
    alert('Silahkan masukkan berat dan tinggi yang valid.');
  }
}

// Membuat fungsi hasil dari input user
function displayResult(bmi, gender) {
  const resultText = getBMICategory(bmi);
  const resultMessage = `BMI anda adalah ${bmi.toFixed(2)} (${resultText}).`;
  const genderMessage = `Berdasarkan data, Jenis kelamin anda adalah ${gender}.`;

  // Menambahkan penjelasan berdasarkan kategori BMI yang didapat
  let explanation;
  if (resultText === 'Kekurangan berat badan') {
    explanation = 'BMI Anda menunjukkan bahwa Anda kekurangan berat badan. Mungkin bermanfaat untuk berkonsultasi dengan profesional perawatan kesehatan untuk saran mempertahankan berat badan yang sehat';
  } else if (resultText === 'Berat badan ideal') {
    explanation = 'BMI Anda termasuk dalam kisaran berat badan normal. Ini menunjukkan bahwa Anda memiliki berat badan yang sehat untuk tinggi badan Anda.';
  } else if (resultText === 'kelebihan berat badan') {
    explanation = 'BMI Anda menunjukkan bahwa Anda kelebihan berat badan. Dianjurkan untuk fokus pada diet seimbang dan olahraga teratur untuk mencapai berat badan yang lebih sehat.';
  } else {
    explanation = 'BMI Anda mengklasifikasikan Anda sebagai obesitas. Sangat penting untuk memprioritaskan kesehatan Anda dan berkonsultasi dengan profesional perawatan kesehatan untuk mengembangkan rencana pengelolaan berat badan.';
  }

  // Menampilkan hasil fungsi dari input user ke text seperti hasil BMI, penjelasan dan jenis kelamin
  document.getElementById('bmiResult').textContent = resultMessage;
  document.getElementById('bmiExplanation').textContent = explanation;
  document.getElementById('genderMessage').textContent = genderMessage;

  // Menampilkan section hasil, menyembunyikan section input
  document.getElementById('input-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
}

// Membuat fungsi mengambil kategori BMI
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Berat badan ideal';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Kelebihan berat badan';
  } else {
    return 'Berat badan obesitas';
  }
}

// Membuat fungsi untuk reset input form
function resetForm() {
  // Membuat input menjadi kosong
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('gender').value = '';

  // Menampilkan section input, menyembunyikan section hasil
  document.getElementById('input-section').style.display = 'block';
  document.getElementById('result-section').style.display = 'none';
}

// Membuat fungsi goback untuk kembali ke section input dari section hasil
function goBack() {
  // Menampilkan section input, menyembunyikan section hasil
  document.getElementById('input-section').style.display = 'block';
  document.getElementById('result-section').style.display = 'none';
}
