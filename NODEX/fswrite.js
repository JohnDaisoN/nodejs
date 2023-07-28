var fs=require('fs')
//fs.writeFile('fs2.js','console.log("hello world blockchain")',function(err){
  // console.log('writing intro file process terminated')
//})
fs.appendFile('fs2.js','console.log("hello again")',function(err){
   console.log('Y')
})