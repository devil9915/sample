function calculate() {
    var ans = document.getElementById("firstName").innerHTML
    var vowels = "";
    var vowelList = "aeoiuAEOIU"
    for (x in ans) {
        if (vowelList.indexOf(ans[x]) != -1) {
            vowels += ans[x]
        }
    }

    console.log(vowels)

    var title = document.title

    if (title.length % 2 == 0) {
        document.title = "FakeNews"
        console.log("FakeNews")
    } else {
        console.log("BreakingNews")
        document.title = "BreakingNews"

    }


}