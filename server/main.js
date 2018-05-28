import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import { isModern } from "meteor/modern-browsers";

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  const { browser } = sink.request;
  const modern = isModern(browser);

  // Code to run on every request.
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date}<br><br>` +
      `User agent: <code>${JSON.stringify(browser, null, 2)}</code> ` +
      `(${modern ? "modern" : "legacy"})`
  );

  if (browser.name !== "galaxybot" && ! modern) {
    console.log("legacy browser!", browser);
  }
});
