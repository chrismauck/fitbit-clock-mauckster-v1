import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
// import * as days from "./locales/en.js";
import * as util from "../../common/utils";

export default class Clock {
  constructor() {
    this.myTime = document.getElementById("myTime");
    this.myDate = document.getElementById("myDate");
  }

  init() {
    clock.granularity = "seconds";

    clock.ontick = (evt) => {
      let tod = evt.date;
      let hours = tod.getHours();
      if (preferences.clockDisplay === "12h") {
        hours = hours % 12 || 12; // 12h format
      } else {
        hours = util.zeroPad(hours);  // 24h format
      }
      let mins = util.zeroPad(tod.getMinutes());
      this.myTime.text = `${hours}:${mins}`;

      this.myDate.text = `${util.getWeekday()} ${util.getDay()}`;
    }
  }

  start() {
    this.init();
  }
}