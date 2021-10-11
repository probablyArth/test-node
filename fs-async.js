const { readFile, writeFile, readFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

readFile('./content/first.txt',"utf-8", (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=> {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result)=> {
            if (err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})