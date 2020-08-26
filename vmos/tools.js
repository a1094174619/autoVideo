auto();

tools.uninstallAppNotWithRoot = function (appName) {
    var packageName = getPackageName(appName);
    app.uninstall(packageName);
};

tools.uninstallAppNotWithRoot = function (appName) {
    var packageName = getPackageName(appName);
    shell("pm uninstall " + packageName, true)
};

toast("1")
Tap(1000, 1000)
toast("2")

console.show()

