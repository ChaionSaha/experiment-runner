import waitForElem from "@utils/wait-for-elem";
import waitUntil from "@utils/wait-until";

let experimentCode = "experiment-code"; // Add your experiment code here

const bodyClass = experimentCode.trim().replace(/\s+/g, "-").toLowerCase();
const selector = "";

waitForElem("body", ([body]) => {
  body.classList.add(bodyClass);
});

waitForElem(selector, ([elem]) => {
  // Add your code here

  waitUntil(() => window.clarity).then((clarity) => {
    clarity("set", "experiment", experimentCode);
  });
});
