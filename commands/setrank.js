const Discord = require('discord.js')
var noblox = require('noblox.js')
const { MessageButton } = require('discord-buttons')

module.exports = {
    name: 'setrank',
    description: "Set someones rank.",
    async execute(message, args){
        const robloxname = args[0]
        console.log(robloxname)

        if(!args) return;

        let button1 = new MessageButton()
        .setLabel("Yes")
        .setStyle("green")
        .setID("Yes")

        let button2 = new MessageButton()
        .setLabel("No")
        .setStyle("red")
        .setID("No")

        message.channel.send(message.author + ', did you say ' + robloxname + '?', { buttons: [button1, button2] })
    }
}