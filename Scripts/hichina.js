/*
航旅纵横 移除广告
*/

const url = $request.url;
const header = $request.headers;
const ua = $request.headers.rpid || $request.headers.Rpid;
const blockIds = [
	"1000002",
	"1000019",
	"1430064"
];

if (blockIds.includes(ua)) {
	$done({status: "HTTP/1.1 404 Not Found"});
} else {
	$done();
}