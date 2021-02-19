const Discord = require('discord.js');

module.exports = {
    name: 'report',
    description: "Report any users for breaking the rules",
    execute(message, args, client){
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first()

        if (!rMember){
            return message.reply("The user you attempted to mention or use in your report message does not exist.").then(m => m.delete({ timeout: 5000 }));
        }

        if (rMember.roles.cache.has('800460004683415594') || rMember.user.bot){
            return message.reply("You cannot report this person!").then(m => m.delete({ timeout: 5000 }));
        }

        if (!args[1]){
            return message.channel.send("Please provide a reason for the report!").then(m => m.delete({ timeout: 5000 }));
        }

        const rChannel = message.guild.channels.cache.find(channel => channel.id === '812100946648760380');

        if (!rChannel){
            message.channel.send("The reports channel ID specified in my code is not correct! The developers have been notified of this issue.").then(m => m.delete({ timeout: 5000 }));
            client.users.fetch('347711540700512256').then((user) => {
                user.send('**A bug has been detected in the bot!**\n\n*Bug:* Reports channel not found when command "report" was run!\n\n Please fix this issue!')
            })
        }

        const embed = new Discord.MessageEmbed()
        .setTitle('Player Report')
        .setDescription(`A player report has been sent through to the admin team! Please **React with the orange if you are claiming the report and/or looking into it.**\n**React with the tick and cross to indicate the report status. tick = report accepted, cross = report denied**\n\n**+ Person Reported:** ${rMember}\n**+ Reported by:** ${message.author}\n**> Reason for report:** ${args.slice(1).join(" ")}`);

        return rChannel.send(embed);
    }
}