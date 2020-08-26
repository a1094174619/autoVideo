auto();

files = [
    "火山极速版.js",
]

engines.execScriptFile("./火山极速版.js")

// var execFiles = []

// function main() {
//     var arr = []; for (let i = 0; i < files.length; i++)arr.push(i);
//     var selectedIndex = dialogs.multiChoice("选择运行的脚本：", files, indices = arr);

//     for (i in selectedIndex) {
//         scriptName = files[selectedIndex[i]]
//         toast("运行脚本: ".concat(scriptName))
//         engines.execScriptFile(scriptName);
//         sleep(10 * 1000);
//     }
// }

// main();