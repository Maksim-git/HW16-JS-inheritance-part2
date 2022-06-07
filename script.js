const fullTime = document.querySelector("#full-time");
const shortTime = document.querySelector("#short-time");

class Clock {
  constructor(classTime, isClicked) {
    this.classTime = classTime;
    this.isClicked = isClicked;
    classTime.addEventListener("click", () => {
      this.clickedChengeFormat();
    });
    setInterval(() => {
      this.formatTime();
    }, 1000);
  }
  clickedChengeFormat() {
    this.isClicked = !this.isClicked;
  }
  formatTime() {
    if (this.isClicked) {
      this.classTime.innerHTML =
        "Full format: " + new Date().toLocaleTimeString();
    } else {
      this.classTime.innerHTML =
        "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
    }
  }
}

class FullFormatTime extends Clock {
  constructor(classTime, isClicked) {
    super(classTime, isClicked);
  }
  formatTime() {
    if (this.isClicked) {
      this.classTime.innerHTML =
        "Full format: " + new Date().toLocaleTimeString();
    } else {
      this.classTime.innerHTML =
        "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
    }
  }
}

const fullFormatTime = new FullFormatTime(fullTime, true);

class ShortFormatTime extends Clock {
  constructor(classTime, isClicked) {
    super(classTime, isClicked);
  }
  formatTime() {
    if (this.isClicked) {
      this.classTime.innerHTML =
        "Short Format: " + new Date().toLocaleTimeString().substring(0, 5);
    } else {
      this.classTime.innerHTML =
        "Full format: " + new Date().toLocaleTimeString();
    }
  }
}

const shortFormatTime = new ShortFormatTime(shortTime, true);
