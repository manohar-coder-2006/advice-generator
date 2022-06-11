const url = 'https://api.adviceslip.com/advice'

const adviceNo = document.querySelector("#id")
const adviceText = document.querySelector(".text")
// const id = document.querySelector("#id").innerHTML = 9

const getData = async() => {
    const response = await fetch(url)
    const json = response.json()
    const data = json.then(data => data.slip)
    console.log(data)
    
    data.then((a) => {
        const id = a.id
        const advice = a.advice
        adviceNo.innerHTML = "ADVICE # " + String(id)
        adviceText.innerHTML = '"' + advice + '"'
    })
}

const data = getData();
// let id = 0


// console.log(id)
// const idData = data.slip.id
// console.log("ID : ", idData)