// JSON 檔案網址
// const url = "https://soweb.kcg.gov.tw/webapi/api/Category/";
const url = "https://natourapi.fly.dev/api/v1/tours";
// const url = "https://flytestdeploy.fly.dev/";
const list = document.querySelector(".list");
let data = [];

/** 步驟一 **/

axios.get(url).then(function (res) {
    console.log(res.data);
});
