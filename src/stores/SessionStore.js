// import { values } from "mobx";
import { types } from "mobx-state-tree";
import moment from "moment";

export const SessionStore = types
  .model("SessionStore", {
    // countdown: types.number,
    serie: types.number,
    currenctSerie: types.number,
    cycle: types.number,
    currenctCycle: types.number,
    startTime: types.string,
    training: types.number, // seconds for training
    rest: types.number, // seconds for resting
    isPlay: types.boolean,
    isStop: types.boolean
  })
  .views(self => ({
    get endTime() {
      const extraSeconds =
        self.rest * self.serie * self.cycle +
        self.training * self.serie * self.cycle;
      const endTime = moment(self.startTime, "HH:mm:ss").add(
        extraSeconds,
        "seconds"
      );
      return endTime.format("HH:mm:ss");
    }
  }))
  .actions(self => ({
    setPause() {
      self.isPlay = false;
    },
    setPlay() {
      self.isPlay = true;
    },
    setStop() {
      self.isStop = false;
    },
    increaseSerie() {
      if (self.currenctSerie === self.serie) {
        self.currenctSerie = 0;
        self.increaseCycle();
      } else {
        self.currenctSerie = self.currenctSerie + 1;
      }
    },
    increaseCycle() {
      if (self.currenctCycle === self.cycle) {
        self.setPause();
        self.setStop();
      } else {
        self.currenctCycle = self.currenctCycle + 1;
      }
    }
  }));

export const initialState = {
  // countdown: 20,
  serie: 2,
  currenctSerie: 0,
  cycle: 3,
  currenctCycle: 0,
  startTime: "00:00:00",
  training: 20, // seconds for training
  rest: 5, // seconds for resting
  isPlay: false,
  isStop: false
};

// endTime;
