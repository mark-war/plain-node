//argv
console.log(process.argv)
//console.log(process.argv[3]) [can pass index depends on the number or arguments]

//process.env
console.log(process.env.SESSIONNAME)

//pid
console.log(process.pid)

//cwd()
console.log(process.cwd())

//title
console.log(process.title)

//memoryUsage()
console.log(process.memoryUsage())

//uptime()
console.log(process.uptime())

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
})

//exit()
console.log(process.exit(0))