/*
import fs from 'fs'

//readFIle() - callback
fs.readFile('./textFile.txt', 'utf-8', (err,data) => {
    if(err) throw err
    console.log(data)
})

//readFileSync() - synchronous way
const data = fs.readFileSync('./textFile.txt', 'utf-8')
console.log(data)
*/

import fs from 'fs/promises'

//readFile() - Promise
fs.readFile('./textFile.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

//readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./textFile.txt', 'utf-8')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

//writeFile() - async/await
const writeFile = async () => {
    try {
        await fs.writeFile('./textFile.txt', 'Hello World!')
        console.log('File modified.')
    } catch (error) {
        console.log(error)
    }
}

//appendFile() - async/await
const appendFile = async () => {
    try {
        await fs.appendFile('./textFile.txt', '\nAppended Text!')
        console.log('File has been modified.')
    } catch (error) {
        console.log(error)
    }
}

writeFile()
appendFile()
readFile()