// document.querySelector(".room").addEventListener("mousemove", function(event) {
//   var rect = document.querySelector(".room").getBoundingClientRect();
//   var canvasX = rect.left;
//   var canvasY = rect.top;
//   console.log(event.pageX - canvasX, event.pageY - canvasY);
// });
//
// var key = document.getElementById("key");
//
// document.getElementById("key").onclick = function() {
//   console.log("You Pressed The Key!");
//   key.classList.add("roll");
//   setTimeout(function() {
//     key.classList.remove("roll");
//   }, 1000);
// };

function setupRoom(room) {
  room.items.forEach(function(item) {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.top = item.top + "px";
    document.querySelector(".room").append(div);
  });
}
setupRoom(room0);
