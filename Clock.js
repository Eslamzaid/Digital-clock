
function printTheTime() {
    var d = new Date()
    var hours = document.getElementById('hours')
    var hour =  d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' , hour12: true })

    hours.innerHTML = hour
}


function printTheDate() {
    var d = new Date()
    var day = document.getElementById('day')
    var days = d.getDate()
    var months = d.getMonth()
    var year = d.getFullYear()

     return day.innerHTML = days+'-'+months+'-'+year
}





printTheDate()
setInterval(printTheTime, 10)
