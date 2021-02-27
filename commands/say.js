const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: "Make me say anything you want!",
    execute(message, args){
        message.channel.send(`*User ${message.member} has told me to say this:*\n\n**${args.join(" ")}**`)
    }
}