import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js';
import { run } from './markov.js';

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
        if(Math.random() < 0.05){
            let out= run();
            console.log(out,"\n")
         message.channel.send(`${out}`);
        }
    }
})