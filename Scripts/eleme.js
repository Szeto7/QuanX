/*
饿了么 移除广告
*/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("mtop.alsc.eleme.miniapp.homepage")) {
	if (obj.data?.data?.miniapp_suspension_template) {
		delete obj.data.data.miniapp_suspension_template;
	}
	if (obj.data?.data?.frontend_suspension_template) {
		delete obj.data.data.frontend_suspension_template;
	}

}
body = JSON.stringify(obj);
$done({body});