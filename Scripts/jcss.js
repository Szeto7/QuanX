// 模拟空启动图，避免加载真实图片
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
