intervalId = null
function start(){
    if(intervalId !== null){
        alert("Pomodoro time!")
        return
    }

    const timerDOM = document.getElementById("timer")
    let pomodoroSecond = 25 * 60
    intervalId = setInterval(() =>{
        pomodoroSecond--
        timerDOM.innerHTML = `<h1>${Math.floor(pomodoroSecond / 60)}:${pomodoroSecond % 60}</h1>`
        if(pomodoroSecond === 0){
            timerDOM.innerHTML = `<h1>🔔</h1>`
            clearInterval(intervalId)
            intervalId = null
        }
    }, 1000)
}