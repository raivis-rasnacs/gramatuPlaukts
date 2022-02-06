function pievienot(poga) {
  var nosaukums = document.getElementById("nosaukums").value;
  var bilde = document.getElementById("vaks").files[0];

  var attels = document.createElement("img");
  attels.alt = nosaukums;
  attels.src = window.URL.createObjectURL(bilde);
  attels.onload = function() {
    window.URL.revokeObjectURL(this.src);
  }

  var rindas = document.getElementById("plaukts").rows;
  for (rinda of rindas) {
    if (rinda.children.length > 4) {
      continue;
    }
    else {
      var gramata = document.createElement("td");
      gramata.appendChild(attels);
      var apraksts = document.createElement("p");
      apraksts.innerHTML = nosaukums;
      gramata.appendChild(apraksts);
      rinda.appendChild(gramata);
      break;
    }
  }
  poga.disabled = true;
  document.getElementById("vaks").value = "";
}