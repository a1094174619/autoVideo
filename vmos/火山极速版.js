huoshan()


function huoshan() {

    perVideoWatchTime = 12

    run = function (totalTime) {
        launchApp2("com.ss.android.ugc.livelite")
        watchVideo(totalTime)
        back()
    }

    watchVideo = function (totalTime) {

        let videoBtn = text("首页").findOnce()
        let videoBtnParent = this.findClickParentt(videoBtn)
        videoBtnParent.click()

        sleep(2000)
        log("进入视频页")
        let watchTime = 0;
        for (let i = 1; i < totalTime / perVideoWatchTime; i++) {
            let isIncome = isNoIncome()
            if (isIncome) {
                log("没有收益了，结束运行")
                runOver()
                break;
            }
            let waitTime = perVideoWatchTime + random(-2, 4)
            log("本视频观看时长" + waitTime)
            sleep(waitTime / 2 * 1000);
            likeAndfollow(30)
            sleep(waitTime / 2 * 1000);
            watchTime += waitTime
            log("已看：" + i + "个视频 " + watchTime + "秒")
            swipeVideo()

        }
    }

    //是否已经不再有收益了
    isNoIncome = function () {
        let isIncome = id("com.ss.android.ugc.livelite:id/rr").findOnce()
        if (!isIncome) {
            sleep(2000)
            isredBag = id("com.ss.android.ugc.livelite:id/a0s").findOnce()
            if (isredBag) {
                log("是广告有红包，准备领取")
                sleep(16000)
                isredBag = findClickParentt(isredBag)
                isredBag.click()
            } else {
                isIncome = id("com.ss.android.ugc.livelite:id/rr").findOnce()
                if (!isIncome) {
                    log("没有收益了。结束")
                    return true;
                }
            }
        }
        return false;
    }

    auto();
    console.show()
    log("开始火山极速版")
    let totalTime = 2 * 60 * 60 //刷2小时
    run(totalTime)

}



/***********************
 * 工具函数
 */


//查找控件的最近一个可点击的父控件
function findClickParentt(indexUi) {
    let clickParent = indexUi.parent()
    while (!clickParent.clickable()) {
        clickParent = clickParent.parent()
    }
    return clickParent;
}

function swipeVideoIndexDirection(direction, swipeDelay) {

    videoSwipeDistance = device.height / 2 - 100//视频下滑的长度 px

    let offset = random(0, 100)
    if (!swipeDelay) { swipeDelay = 30 }
    if (direction == "up") {
        swipe(device.width / 2 + random(0, 100), device.height / 2 - offset,
            device.width / 2 + random(-50, 50), device.height / 2 + offset + (videoSwipeDistance / 2), swipeDelay);
    } else if (direction == "down") {
        swipe(device.width / 2 - random(0, 100), device.height / 2 + offset + (videoSwipeDistance / 2),
            device.width / 2 + random(-50, 50), device.height / 2 - offset - (videoSwipeDistance / 2), swipeDelay);
    }
}

/**
 * 指定概率（%），根据概率是否执行双击喜欢操作，
 * 输入的数据不包含…%，如输入30表示30%
 * */
function likeAndfollow(chance) {
    let isLike = random(0, 100)
    if (isLike <= chance) {
        click(device.width / 2, device.height / 2)
        sleep(50)
        click(device.width / 2, device.height / 2)
        log("双击喜欢")
    }

}

function runOver() {
    home()
}

function swipeVideo() {
    swipeVideoIndexDirection("down")

}

function launchApp2(appPackageName) {
    let isLauchApp = false
    while (!isLauchApp) {
        log("尝试启动".concat(appPackageName))

        launchPackage(appPackageName)
        sleep(8000)

        if (currentPackage() != appPackageName) {
            isLauchApp = true
        }
    }
    log("已启动")
}

function closeApp(app) {
    toast("结束 ".concat(app));
    shell('am force-stop ' + app, true);
    sleep(5000);
}

