/*
警察叔叔 移除广告
*/

let obj = {
  success: true,
  resultCode: 0,
  data: {
    id: 0,
    img: "",
    times: 0,
    url: "",
    remark: ""
  }
};
$done({ body: JSON.stringify(obj) });
