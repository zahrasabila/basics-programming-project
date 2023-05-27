var luas;
var keliling;
var panjang;
var lebar;
function hitung() {
  panjang = parseFloat(document.getElementById("ipt_panjang").value);
  lebar = parseFloat(document.getElementById("ipt_lebar").value);
  luas = panjang * lebar;
  keliling = panjang + panjang + lebar + lebar;
  document.getElementById("opt_luas").value = luas;
  document.getElementById("opt_keliling").value = keliling;
}
