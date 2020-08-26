var apps = [
    "com.ss.android.ugc.livelite", //火山极速版
];

main(apps)

function main(apps) {
    auto();

    for (var i = 0; i < 18; i++) {
        for (var i in apps) {
            toast("启动 ".concat(apps[i]))
            launchPackage(apps[i]);
            sleep(8000);
            swipeVideo();
        }
    }

    home()

}

function swipeVideo() {
    sleep(5000)

    for (var i = 0; i < 10 * 12; i++) {
        if (i % 2 == 0) {
            swipe(500, 1800, 500, 500, 200)
        }
        toast("已经运行".concat((i * 5).toString(), "秒"));
        sleep(1000 * 5)
    }
}

