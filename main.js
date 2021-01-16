var slider = tns({
  container: ".my-slider",
  mode: "carousel",
  autoplay: true,
  gutter: 4,
  items: 1,
  responsive: {
    470: {
      edgePadding: 35,
      gutter: 20,
      items: 2,
    },
    650: {
      items: 3,
    },
    850: {
      gutter: 30,
      items: 4,
    },
    1050: {
      items: 5,
    },
  },
});
window.onload = numForPage();
window.addEventListener("resize", numForPage());
function numForPage() {
  console.log();
  let tns_nav = document.querySelectorAll(".tns-nav button");
  for (let i = 0; i < tns_nav.length; i++) {
    tns_nav[i].innerText = `${i + 1}`;
    console.log(i);
  }
}
