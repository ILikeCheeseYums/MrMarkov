import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js';
import { run, saver } from './markov.js';

dotenv.config()

const client =new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", (message)=>{
    if (!message.author.bot) {
        saver(message.content+"\n")
        if(Math.random() < 0.5){
            let out= run();
            console.log(out," ");
         message.channel.send(`${out}`);
        }
    }
})