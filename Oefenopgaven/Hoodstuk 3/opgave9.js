let GetBerekenKnop = document.querySelector("#berekenJaarSalaris");

GetBerekenKnop.addEventListener("click", berekenSalaris);

function berekenSalaris() {
  let GetMaandSalaris = document.querySelector("#maandSalaris").value;
  let GetJaarSalaris = document.querySelector("#jaarSalaris");
  let jaarSalaris = Math.round(GetMaandSalaris * 12 * 1.08);
  GetJaarSalaris.value = jaarSalaris;
}
