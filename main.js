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

setInterval(() => {
  console.log(hungryFsm.state);
  hungryFsm.time();
  console.log(hungryFsm.state);
}, 3000);
/* Set interval as 10 seconds */

setInterval(() => {
  console.log(cleanFsm.state);
  cleanFsm.time();
  console.log(cleanFsm.state);
}, 10000);

setInterval(() => {
  const filename = `${hungryFsm.state}-${cleanFsm.state}.gif`;
  document.getElementById("gif").src = `images/${filename}`;
}, 5000);
