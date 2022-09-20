export class Countdown {
  TIMER_INTERVAL = 1000; //ms

  // constructor gets callback for update interface
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
    this.init();
  }

  init() {
    this.onTick(0);
  }

  //method gets initial starting time in Unix time ms for countdown timer
  start(initialTime) {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const timeLeftMiliseconds = initialTime - Date.now();
      if (timeLeftMiliseconds < 0) {
        this.reset();
        return;
      }
      this.onTick(timeLeftMiliseconds);
    }, this.TIMER_INTERVAL);
    console.log('timer started');
  }

  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('timer stoped');
      this.intervalId = null;
      this.onTick(0);
      return;
    }
  }
}
