// JSON 檔案網址
// const url = "https://soweb.kcg.gov.tw/webapi/api/Category/";
// const url = "https://natourapi.fly.dev/api/v1/tours/634267677ecd3ee5a881214f";
const url = "https://learnnodejs-3s6rmmfxwq-de.a.run.app/api/v1/tours/";
const list = document.querySelector(".list");
let tourData = {};

/** 步驟一 **/

axios.get(url).then(function (res) {
    tourData = { ...res.data.dtat.tours };

    console.log(tourData);
    document.body.innerHTML = `<a href="single.html?id=${tourData.id}">${tourData.name}</a>`;
});
