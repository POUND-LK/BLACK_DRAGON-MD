const os = require('os')
const {runtime} = require("../utils/functions")
module.exports = [
  {
    name:"alive".
    description:"alive command",
    react:"👋",
    ownerOnly: false,
    groupOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn,mek,args,context){
      const {from,pushname,reply,quoted} = context;
      try{
           let desc`
HELLOW ${pushname} I AM ALIVE NOW 👋
BOT START Uptime:${runtime(process.uptime())}
`
await conn.sendMessage(from,
    {
      image:{url:"https://files.catbox.moe/dd0bl5.jpg"},
      caption: desc
    },{
        quoted:mek
    }
  )

      }catch(e){
         console.log(e)
       }
     }
  }
]
