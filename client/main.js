console.log(`Greetings from ${module.id}!`);

Meteor.startup(() => {
  if (window.performance) {
    const { responseStart } = performance.timing;
    const loadTime = new Date - responseStart;
    document.getElementById("client-performance").innerHTML =
      "Client load time: " + loadTime + " ms " +
      "(since <code>performance.timing.responseStart</code>)";
  }
});
