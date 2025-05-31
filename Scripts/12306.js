const version = 'V2';

var obj = JSON.parse($request.body), SZETO = {};

if ("0007" == obj.placementNo) {
    SZETO.materialsList = [{
        billMaterialsId: "6491",
        filePath: "ddgksf2013",
        creativeType: 1
    }];
    SZETO.advertParam = { skipTime: 1 };
    SZETO.code = "00";
} else if ("G0054" == obj.placementNo) {
    SZETO = { code: "00", materialsList: [{}] };
} else {
    SZETO = { code: "00", message: "无广告返回" };
}

if (typeof $task != "undefined") {
    $done({ body: JSON.stringify(SZETO) });
} else {
    $done({ response: { body: JSON.stringify(SZETO) } });
}