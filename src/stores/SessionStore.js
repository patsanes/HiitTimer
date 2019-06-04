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
    timeCompleteWorkout: types.number,
    isPlay: types.boolean,
    isStop: types.boolean,
    isRest: types.boolean,
    currentTime: types.number,
    inProgress: types.boolean,
  })
  .views(self => ({
    get endTime() {
      const extraSeconds = (self.rest + self.training) * self.serie * self.cycle;
      const endTime = moment(self.startTime, 'HH:mm:ss').add(extraSeconds, 'seconds');
      return endTime.format('H [horas] m [min y] s [seg]');
    },
  }))
  .actions(self => ({
    setInProgress() {
      self.inProgress = !self.inProgress;
    },
    setPause() {
      self.isPlay = false;
    },
    setPlay() {
      self.isPlay = true;
      self.isStop = false;
    },
    setStop() {
      if (!self.isStop) {
        self.isPlay = false;
        self.isStop = true;
        self.resetTime(true);
        self.setInProgress();
      }
    },
    saveTime() {
      self.currentTime -= 1;
    },
    resetTime(isCountdown) {
      if (isCountdown) self.currentTime = self.training;
      else self.currentTime = self.rest;
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
  serie: 1,
  currentSerie: 0,
  cycle: 1,
  currentCycle: 0,
  startTime: '00:00:00',
  training: 5, // seconds for training
  rest: 3, // seconds for resting
  restBetween: 3, // seconds for resting
  startCountdown: 2, // seconds for resting
  timeCompleteWorkout: 54,
  isPlay: false,
  isStop: true,
  isRest: false,
  currentTime: 28,
  inProgress: false,
};
