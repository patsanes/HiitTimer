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
    restBetween: types.number, // seconds for resting
    startCountdown: types.number,
    isPlay: types.boolean,
    isStop: types.boolean,
    isRest: types.boolean,
  })
  .views(self => ({
    // no se usa para nada revisar despues
    get endTime() {
      const extraSeconds =
        self.rest * self.serie * self.cycle + self.training * self.serie * self.cycle;
      const endTime = moment(self.startTime, 'HH:mm:ss').add(extraSeconds, 'seconds');
      return endTime.format('HH:mm:ss');
    },
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
      if (!self.isRest) {
        if (self.currentSerie === self.serie) {
          self.currentSerie = 0;
          self.increaseCycle();
        } else {
          self.currentSerie += 1;
        }
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
    updateTraining(newValue) {
      self.training = Number(newValue);
    },
    updateRest(newValue) {
      self.rest = Number(newValue);
    },
    updateCycle(newValue) {
      self.cycle = Number(newValue);
    },
    updateSerie(newValue) {
      self.serie = Number(newValue);
    },
    updateRestBetween(newValue) {
      self.restBetween = Number(newValue);
    },
    updateStartCountdown(newValue) {
      self.startCountdown = Number(newValue);
    },
  }));

export const initialState = {
  serie: 2,
  currentSerie: 0,
  cycle: 3,
  currentCycle: 0,
  startTime: '00:00:00',
  training: 6, // seconds for training
  rest: 3, // seconds for resting
  restBetween: 3, // seconds for resting
  startCountdown: 10, // seconds for resting
  isPlay: false,
  isStop: false,
  isRest: false,
};
