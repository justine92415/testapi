let singleUrl = document.URL;
let url = new URL(singleUrl);
const singleID = url.searchParams.toString().split("=")[1];
const singleUr = `https://natourapi.fly.dev/api/v1/tours/${singleID}`;

const change = document.querySelector(".change");
const cbox = document.querySelector(".contentbox");
axios.get(singleUr).then(function (res) {
    const singleItem = res.data.dtat.tour;
    // console.log(singleItem);
    cbox.innerHTML += `
    <h1>${singleItem.name}</h1>
    `;
});

change.addEventListener("click", function (e) {
    cbox.innerHTML = "載入中";
    axios
        .get("https://natourapi.fly.dev/api/v1/tours/63418d1aef14c0d919e9966a")
        .then(function (res) {
            const singleItem = res.data.dtat.tour;
            // console.log(singleItem);
            cbox.innerHTML = `
        <h1>${singleItem.name}</h1>
        `;
        });
});
