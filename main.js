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

const rooms = [
  {
    items: [
      {
        src: "images/key.png",
        left: 1190,
        top: 446.5,
        width: 64,
        height: 64
      },
      {
        left: 590,
        top: 261,
        width: 150,
        height: 200
      }
    ]
  }
];

function cleanRoom() {
  document.querySelector(".room").innerHTML = "";
}

function setupRoom(room) {
  cleanRoom();
  room.items.forEach(function(item) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.top = `${item.top}px`;
    div.style.left = `${item.left}px`;
    div.style.width = `${item.width}px`;
    div.style.height = `${item.height}px`;
    if (item.src) {
      div.style.backgroundImage = `url('${item.src}')`;
    }
    document.querySelector(".room").append(div);
  });
}
setupRoom(rooms[0]);
