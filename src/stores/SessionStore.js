import { types } from 'mobx-state-tree';
import moment from 'moment';

export const SessionStore = types
  .model('SessionStore', {
    serie: types.number,
    currentSerie: types.number,
    cycle: types.number,
    currentCycle: types.number,
    training: types.number, // seconds for training
    rest: types.number, // seconds for resting
    restBetween: types.number, // seconds for resting ADD THIS LATER ON
    startCountdown: types.number,
    timeCompleteWorkout: types.number,
    isPlay: types.boolean,
    isStop: types.boolean,
    isRest: types.boolean,
    currentTime: types.number,
    inProgress: types.boolean,
    timePased: types.number,
  })
  .views(self => ({
    get endTime() {
      const startTime = '00:00:00';
      const extraSeconds = (self.rest + self.training) * self.serie * self.cycle;
      const endTime = moment(startTime, 'HH:mm:ss').add(extraSeconds, 'seconds');
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
        // self.resetTime();
        self.setInProgress();
      }
    },
    increaseTime() {
      self.timePased = self.timePased + 1;
    },
    saveTime() {
      self.currentTime -= 1;
    },
    resetTime(save) {
      if (save) {
        self.saveTime();
      } else {
        if (self.isRest) {
          self.currentTime = self.rest;
        } else {
          self.currentTime = self.training;
        }
      }
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
      self.resetTime(false);
    },
    increaseCycle() {
      if (self.currentCycle === self.cycle) {
        self.setPause();
        if (self.isTimeToFinish()) {
          self.finishWorkout();
        }
      } else {
        self.currentCycle += 1;
      }
    },
    isTimeToFinish() {
      if (
        self.serie == self.currentSerie &&
        self.cycle == self.currentCycle &&
        self.timePased == self.timeCompleteWorkout
      ) {
        return true;
      }
      return false;
    },
    finishWorkout() {
      self.setStop();
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

const initialState = {
  serie: 1,
  currentSerie: 0,
  cycle: 1,
  currentCycle: 0,
  training: 5, // seconds for training
  rest: 3, // seconds for resting
  restBetween: 3, // seconds for resting
  startCountdown: 2, // seconds for resting
  isPlay: false,
  isStop: true,
  isRest: false,
  inProgress: false,
  timePased: 0,
};
initialState.currentTime = initialState.training;
initialState.timeCompleteWorkout =
  (initialState.training + initialState.rest) * initialState.serie * initialState.cycle;

export { initialState };
