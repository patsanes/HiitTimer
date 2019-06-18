import { types } from 'mobx-state-tree';
import moment from 'moment';
import { Vibration } from 'react-native';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

const DURATION = 1000;

export const SessionStore = types
  .model('SessionStore', {
    training: types.number, // seconds for training
    rest: types.number, // seconds for resting
    restBetween: types.number, // seconds for resting ADD THIS LATER ON
    serie: types.number,
    currentSerie: types.number,
    cycle: types.number,
    currentCycle: types.number,
    startCountdown: types.number, // countdown para arrancar
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
    playSound() {
      Vibration.vibrate(DURATION);

      if (self.isRest) {
        var restSound = new Sound('zapsplat_multimedia_alert.mp3', Sound.MAIN_BUNDLE, error => {
          restSound.play();
        });
      } else {
        var countSound = new Sound('single_note.mp3', Sound.MAIN_BUNDLE, error => {
          countSound.play();
        });
      }
    },
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
        self.currentCycle = 0;
        self.currentSerie = 0;
        self.inProgress = false;
      }
    },
    increaseTime() {
      self.timePased = self.timePased + 1;
    },
    saveTime() {
      self.currentTime -= 1;
    },
    changeState() {
      if (self.isRest) {
        self.currentTime = self.rest;
      } else {
        self.currentTime = self.training;
      }
    },
    resetTime(saveOrChangeState) {
      if (saveOrChangeState) {
        self.saveTime();
      } else {
        self.changeState();
      }
    },
    increaseSerie() {
      if (!self.isRest) {
        if (self.currentSerie === self.serie) {
          self.currentSerie = 0;
          self.increaseCycle();
        }
      } else {
        self.currentSerie += 1;
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
  serie: 2,
  currentSerie: 0,
  cycle: 1,
  currentCycle: 0,
  training: 3, // seconds for training
  rest: 2, // seconds for resting
  restBetween: 2, // seconds for resting
  startCountdown: 3, // seconds for resting
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
