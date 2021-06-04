const Discord = require('discord.js')
var noblox = require('noblox.js')

module.exports = {
    name: 'setrank',
    description: "Set someones rank.",
    async execute(message, args){
        const robloxname = args[0]
        console.log(robloxname)
    }
}