var fsm = new StateMachine({
  init: "normal",
  transitions: [
    { name: "feed", from: "hungry", to: "normal" },
    { name: "time", from: "normal", to: "hungry" },
    { name: "longtime", from: "hungry", to: "dead" }
  ],
  methods: {
    onFeed: function() {
      console.log("Eating");
    }
    /* onFreeze: function() {
      console.log("I froze");
    },
    onVaporize: function() {
      console.log("I vaporized");
    },
    onCondense: function() {
      console.log("I condensed");
    } */
  }
});

setInterval(() => {
  console.log(fsm.state);
  fsm.time();
  console.log(fsm.state);
}, 1000);
