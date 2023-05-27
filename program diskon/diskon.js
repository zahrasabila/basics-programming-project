function submit() {
  var nilai = document.getElementById("input").value;
  var diskon = 0;
  var total = 0;

  if (nilai >= 500000 && nilai <= 600000) {
    diskon = 0.1;
    total = nilai * diskon;

    document.getElementById(
      "hargaDiskon"
    ).innerHTML = `Harga Setelah Diskon: ${total}</br>Selamat, anda mendapat diskon senilai ${total}</br>Terima kasih sudah berbelanja𓆩♡𓆪</br>Selalu bersama anda, VIX Clothes.`;
  } else if (nilai >= 600001 && nilai <= 700000) {
    diskon = 0.15;
    total = nilai * diskon;

    document.getElementById(
      "hargaDiskon"
    ).innerHTML = `Harga Setelah Diskon: ${total}</br>Selamat, anda mendapat diskon senilai ${total}</br>Terima kasih sudah berbelanja𓆩♡𓆪</br>Selalu bersama anda, VIX Clothes.`;
  } else if (nilai >= 700001 && nilai <= 800000) {
    diskon = 0.2;
    total = nilai * diskon;

    document.getElementById(
      "hargaDiskon"
    ).innerHTML = `Harga Setelah Diskon: ${total}</br>Selamat, anda mendapat diskon senilai ${total}</br>Terima kasih sudah berbelanja𓆩♡𓆪</br>Selalu bersama anda, VIX Clothes.`;
  } else if (nilai >= 800001 && nilai <= 900000) {
    diskon = 0.25;
    total = nilai * diskon;

    document.getElementById(
      "hargaDiskon"
    ).innerHTML = `Harga Setelah Diskon: ${total}</br>Selamat, anda mendapat diskon senilai ${total}</br>Terima kasih sudah berbelanja𓆩♡𓆪</br>Selalu bersama anda, VIX Clothes.`;
  } else if (nilai >= 900001) {
    diskon = 0.3;
    total = nilai * diskon;

    document.getElementById(
      "hargaDiskon"
    ).innerHTML = `Harga Setelah Diskon: ${total}</br>Selamat, anda mendapat diskon senilai ${total}</br>Terima kasih sudah berbelanja𓆩♡𓆪</br>Selalu bersama anda, VIX Clothes.`;
  } else {
    document.getElementById("hargaDiskon").innerHTML =
      "maaf, anda belum bisa mendapat diskon";
  }

  // document.getElementById("message").innerHTML = "Congratulations, You Got It!";
  // document.getElementById("thanks").innerHTML = "Thank You So Much For Ordering 𓆩♡𓆪";
  // document.getElementById("signature").innerHTML = "Always With You, VIX-Clothes.";
}
