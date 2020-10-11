function showname() {
  var name = document.getElementById("file");
  document.getElementById("labelId").innerHTML =
    name.files.item(0).name + " selected";
}

var lastScrollTop = 50;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  function() {
    // or window.addEventListener("scroll"....
    var st = document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      document.getElementById("navId").style.transition = "2000";
      document.getElementById("navId").style.backgroundColor = "lightGrey";
      //nI.classList.add("bg-light1");

      // document.getElementById("MyElement").classList.remove("MyClass");
    } else if (st < 50) {
      document.getElementById("navId").style.backgroundColor = "transparent";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
