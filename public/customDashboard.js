// modals
const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});


// pie chart

// const ctx = document.getElementById("myChart").getContext("2d")

// const myChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     labels: ["Litecoin", "dashcoin", "bitcoin", "dogecoin"],
//     datasets: [
//       {
//         label: "0",
//         data: [8, 20, 8, 2],
//         backgroundColor: ["#4e4848", "#009adc", "#ef9b12", "#918a33"],
//         borderWidth: 0,
//       },
//     ],
//   },
// });

// offcanvas
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
