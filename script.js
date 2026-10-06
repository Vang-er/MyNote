document.addEventListener("DOMContentLoaded", () => {
  const myname = document.getElementById("myname");
  const namemeasure = document.getElementById("namemeasure");
  let mynamelist = ["Vanger", "The Intruder", "محمد", "القلزمي"];
  let icounter = 0;
  let namewidth;
  setInterval(() => {
    const newName = mynamelist[icounter];
    namemeasure.innerText = newName;
    const newWidth = namemeasure.offsetWidth;
    myname.innerText = newName;
    myname.style.width = `${newWidth}px`;
    icounter++;
    if (icounter === mynamelist.length) {
      icounter = 0;
    }
  }, 2000);
});
