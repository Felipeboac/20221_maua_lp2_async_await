//https://api.openweathermap.org/data/2.5/forecast?q=Itu&appid=9c4dd8ce278f586ea51bb7e4366abe61


require('dotenv').config()

const axios = require ('axios')

// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS

const { PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q } = process.env



const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

//IO-Bound
//CPU-Bound
axios.get(url)
.then(res => {
    console.log(res.data)
    return res.data
})
.then (res => {
    console.log(res.cnt)
    return res
})

console.log(url)