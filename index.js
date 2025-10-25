const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')


    setInterval( () => {
        const date = new Date()

        const dateHour = date.getHours().toString().padStart(2, "0")
        const dateMinute = date.getMinutes().toString().padStart(2, "0")
        const dateSecond = date.getSeconds().toString().padStart(2, "0")


        hour.textContent = dateHour
        minute.textContent = dateMinute
        second.textContent = dateSecond
    },1000)






