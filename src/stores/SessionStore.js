// import { values } from "mobx";
import { types } from 'mobx-state-tree';
import moment from 'moment';

export const SessionStore = types
  .model('SessionStore', {
    serie: types.number,
    currentSerie: types.number,
    cycle: types.number,
    currentCycle: types.number,
    startTime: types.string,
    training: types.number, // seconds for training
    rest: types.number, // seconds for resting
    isPlay: types.boolean,
    isStop: types.boolean,
    isRest: types.boolean,
  })
  .views(self => ({
    get endTime() {
      const extraSeconds =
        self.rest * self.serie * self.cycle + self.training * self.serie * self.cycle;
      const endTime = moment(self.startTime, 'HH:mm:ss').add(extraSeconds, 'seconds');
      return endTime.format('HH:mm:ss');
    },
  }))
  .actions(self => ({
    setPause() {
      console.log('ok');
      self.isPlay = false;
    },
    setPlay() {
      console.log('ok2');
      self.isPlay = true;
    },
    setStop() {
      self.isStop = false;
    },
    increaseSerie() {
      // debugger;
      if (self.currentSerie === self.serie) {
        self.currentSerie = 0;
        self.increaseCycle();
      } else {
        self.currentSerie += 1;
      }
      self.isRest = !self.isRest;
    },
    increaseCycle() {
      if (self.currentCycle === self.cycle) {
        self.setPause();
        self.setStop();
      } else {
        self.currentCycle += 1;
      }
    },
  }));

export const initialState = {
  // countdown: 20,
  serie: 2,
  currentSerie: 0,
  cycle: 3,
  currentCycle: 0,
  startTime: '00:00:00',
  training: 6, // seconds for training
  rest: 3, // seconds for resting
  isPlay: false,
  isStop: false,
  isRest: false,
};

// endTime;
