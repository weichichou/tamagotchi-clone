var hungryFsm = new StateMachine({
  init: "normal",
  transitions: [
    { name: "feed", from: "hungry", to: "normal" },
    { name: "time", from: "normal", to: "hungry" },
    { name: "time", from: "hungry", to: "dead" },
    { name: "time", from: "dead", to: "dead" }
  ],
  methods: {
    onFeed: function() {
      console.log("Eating");
      document.getElementById("gif").src = "images/eating.png";
    }
    /*  onEnterHungry: function() {
      document.getElementById("gif").src = "images/hungry.gif";
    } */
  }
});

var cleanFsm = new StateMachine({
  init: "normal",
  transitions: [
    { name: "bath", from: "dirty", to: "normal" },
    { name: "time", from: "normal", to: "dirty" },
    { name: "time", from: "dirty", to: "dead" },
    { name: "time", from: "dead", to: "dead" }
  ],
  methods: {
    /* onFeed: function() {
      console.log("Eating");
      document.getElementById("gif").src = "images/eating.png";
    } */
  }
});

const hungryTimer = setInterval(() => {
  console.log(hungryFsm.state, "hungry");
  hungryFsm.time();
  console.log(hungryFsm.state, "hungry");
  // if (hungryFsm.state === "dead") {
  //   clearInterval();
  // }
}, 3000);
/* Set interval as 10 seconds */

const cleanTimer = setInterval(() => {
  console.log(cleanFsm.state, "clean");
  cleanFsm.time();
  console.log(cleanFsm.state, "clean");
  // if (cleanFsm.state === "dead") {
  //   clearInterval();
  // }
}, 10000);

const stateTimer = setInterval(() => {
  const filename = `${hungryFsm.state}-${cleanFsm.state}.gif`;
  document.getElementById("gif").src = `images/${filename}`;
  if (filename.includes("dead")) {
    document.getElementById("gif").src = "images/very-angry.png";
  }
  gameOver();
}, 5000);

function gameOver() {
  if (hungryFsm.state === "dead" && cleanFsm.state === "dead") {
    console.log("Game Over!");
    clearInterval(hungryTimer);
    clearInterval(cleanTimer);
    clearInterval(stateTimer);
  }
}

gameOver();
