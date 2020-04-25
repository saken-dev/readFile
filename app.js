const fs = require('fs')

//Blocking way, sync

const inputSync = fs.readFileSync('txt/helloSync.txt', 'utf-8')
const writeSync = `Data from helloSync.txt: ${inputSync}`

fs.writeFileSync('txt/outputSync.txt', writeSync)
console.log('Non blocking way is done')

//Non-blocking way, async

fs.readFile('txt/read-this.txt', 'utf-8', (err, data1) =>{
    if (err) throw err
    fs.readFile(`txt/${data1}`, 'utf-8', (err, data2)=>{
        if(err) throw err
        fs.writeFile('txt/outputAsync.txt', `Data: ${data2}`,'utf-8', err =>{
            if(err) throw err
            console.log('Done')
        })
    })
})

console.log('Programm is end')