let time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),

    //1
    getTimeInStandartFormat() {
        let hours_str = String(this.hours);
        let minutes_str = String(this.minutes);
        let seconds_str = String(this.seconds);

        if (hours_str.length < 2) hours_str = 0 + hours_str;
        if (minutes_str.length < 2) minutes_str = 0 + minutes_str;
        if (seconds_str.length < 2) seconds_str = 0 + seconds_str;
        
        return `${hours_str}:${minutes_str}:${seconds_str}`;
    },

    //2
    addOneSecondAndSave(hours, minutes, seconds) {
        if (seconds === 59) {
            seconds = 0;
            if (minutes == 59) {
                minutes = 0;
                if (hours == 23) hours = 0;
                else hours++;
            } else minutes++;
        } else seconds++;

        [this.hours, this.minutes, this.seconds] = [hours, minutes, seconds];
    },

    //3
    subtractOneSecondAndSave(hours, minutes, seconds) {
        if (seconds === 0) {
            seconds = 59;
            if (minutes == 0) {
                minutes = 59;
                if (hours == 0) hours = 23;
                else hours--;
            } else minutes--;
        } else seconds--;
        
        [this.hours, this.minutes, this.seconds] = [hours, minutes, seconds];
    },

    //4
    showCurrentTime() {
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();

        document.write(
`<p style="font-size: 24pt; font-family: Arial, Helvetica, sans-serif;">
    <strong>${this.getTimeInStandartFormat()}</strong>
</p>`
        );
    }
};

//1
alert(`Current time in standart format: ${time.getTimeInStandartFormat()}`);

//Getting time for tasks 2 and 3
let userTime = getTimeFromUser();
if (userTime) {
    //2
    time.addOneSecondAndSave(...userTime);
    alert(`One second added: ${time.getTimeInStandartFormat()}`);

    //3
    time.subtractOneSecondAndSave(...userTime);
    alert(`One second subtracted: ${time.getTimeInStandartFormat()}`);
}

//4
time.showCurrentTime();

function getTimeFromUser() {
    let [hours, minutes, seconds, ...rest] =
        prompt("Enter time in format \"hh/mm/ss\"").split("/").map(item => +item);

    if (!hours || !minutes || !seconds || rest.length > 0) {
        alert("Invalid time format");
        return;
    }

    if (hours < 0 || hours >= 24) {
        alert("Invalid hours");
        return;
    }
    
    if (minutes < 0 || minutes >= 60) {
        alert("Invalid minutes");
        return;
    }
    
    if (seconds < 0 || seconds >= 60) {
        alert("Invalid seconds");
        return;
    }

    return [ hours, minutes, seconds ];
}