const Discord = require('discord.js');

module.exports = {
    name: 'smpstaff',
    description: "Shows the Administration Team for the SMP",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('ADO SMP Administration Team')
        .setDescription('**Head of Administration:**\nxd Aidan (567442186774249494), SMP Owner\ncheese lord (476058934105473027), Owners Assistant\n\n**Administration Team:**\nDaffyDandaniel (347711540700512256), Server Admin (Experienced)\n\n**Moderator Team:**\nNone')
        .setFooter('ADO SMP Administration Team Information')

        message.channel.send(embed)
        return message.react('👍')
    }
}