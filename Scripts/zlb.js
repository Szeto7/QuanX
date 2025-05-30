// 返回空的开屏图数据
let obj = {
  success: true,
  resultCode: 0,
  data: {
    id: 0,
    img: "",
    times: 0,
    url: "",
    remark: "",
    showFrequen: null,
    accessibleText: null
  }
};
$done({ body: JSON.stringify(obj) });