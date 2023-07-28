const fs = require('fs')

const contents = 'Data to write 123\n'


fs.writeFile('output.txt', contents, {
// 'a' flag for append
}, (err) => {
  console.log("ERROR: ", err)
})


// Append File, async: 
fs.appendFile('output.txt', contents, (err) => {
  console.log("ERROR: ", err)
})



fs.writeFileSync('output.txt', contents)


fs.appendFileSync('output.txt', contents)


//jd sync error try catching
try {
  fs.appendFileSync('output.txt', contents, {
    flag: 'ax'
  })  
} catch(e) {
  console.log("ERROR: ", e)
}

console.log("\nEnd of script")