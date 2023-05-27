function check() {
  let max = parseInt(document.getElementById("myInput").value);
  let voc = Math.floor(Math.random() * (max - 2 + 1)) + 1;

  document.getElementById("demo").innerHTML = "Nomor undian Anda: " + voc;
  console.log(voc);

  let isPrima = cekPrima(voc);
  if (isPrima) {
    document.getElementById("demo_2").innerHTML =
      "Istimewa! Anda mendapatkan voucher prima";
  } else if (voc % 2 === 0) {
    document.getElementById("demo_2").innerHTML =
      "Anda mendapatkan voucher genap";
  } else {
    document.getElementById("demo_2").innerHTML =
      "Anda mendapatkan voucher ganjil";
  }
}

function cekPrima(voc) {
  if (voc < 2) {
    return false;
  }

  for (let x = 2; x <= Math.sqrt(voc); x++) {
    if (voc % x === 0) {
      return false;
    }
  }

  return true;
}

// function check() {
//   let max = document.getElementById("myInput").value;
//   let voc = Math.floor(Math.random() * (max - 2 + 1)) + 1;

//   document.getElementById("demo").innerHTML = "nomor undian anda " + voc;
//   console.log(voc);

//   cekPrima(voc);
//   if (voc % 2 == 0) {
//     document.getElementById("demo_2").innerHTML =
//       "Anda mendapatkan voucher genap";
//   } else if (cekPrima) {
//     document.getElementById("demo_2").innerHTML =
//       "Istimewa! Anda mendapatkan voucher prima";
//   } else {
//     document.getElementById("demo_2").innerHTML =
//       "Anda mendapatkan voucher ganjil";
//   }
// }

// function cekPrima(voc) {
//   for (x = 2; x < voc; x++) {
//     // Jika bilangan dapat dibagi, maka bilangan itu pasti bukan prima
//     if (voc % x == 0 && voc > 2) {
//       return false;
//     }
//   }

// Jika bilangan tidak dapat dibagi kecuali dengan bilangan itu sendiri, maka
// bilangan itu adalah bilangan prima.

// for (var i = 0; i <= 1; i++) {
//   if (i > 1 && i != 0) {
//     if (i % 2 === 0 && i != 2) {
//       document.getElementById("demo_2").innerHTML =
//         "Anda mendapatkan voucher genap";
//       console.log(i + " adalah bilangan genap ");
//     } else {
//       // Pengecekan bilangan prima
//       // Jika cekPrima == true maka prima, jika false maka bukan prima
//       if (cekPrima(i)) {
//         document.getElementById("demo_2").innerHTML =
//           "Istimewa! Anda mendapatkan voucher prima";
//         console.log(i + " adalah bilangan prima ");
//       } else {
//         document.getElementById("demo_2").innerHTML =
//           "Anda mendapatkan voucher ganjil";
//         console.log(i + " adalah bilangan ganjil ");
//       }
//     }
//   } else if (i != 0) {
//     document.getElementById("demo_2").innerHTML =
//       "Anda mendapatkan voucher ganjil";
//     console.log(i + " adalah bilangan ganjil ");
//   }
// }
