const fs=require('fs')
const { get } = require('https')
const readline=require(readline/promises)
const {stdin: input,stdout: output }=require('process')
const rl=readline.createInterface({input,output})

async function getUsername(){
    const username=await rl.question('Enter username: ')
    if(!username) return getUsername()

    try{
        fs.readFileSync(`${username}.txt`);
        return username;
    } catch (e){
        if(e.code==='ENOENT'){
            console.log('username "$username" does not exist, try a different one please')
            return getUsername()
        }

    }


}
async function getUserUpdate(){
    const username=await getUsername();
    const raw=await rl.question('Enter user details (name|age|course): ')
    const data=Buffer.from(`\n${raw}\n`)
    fs.writeFileSync()
}
