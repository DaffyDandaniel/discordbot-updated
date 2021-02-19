const Discord = require('discord.js');

module.exports = {
    name: 'report',
    description: "Report any users for breaking the rules",
    async execute(message, args, client){
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

        const rChannel = message.guild.channels.cache.find(channel => channel.id === '812100946648760381');

        if (!rChannel){
            message.channel.send("The reports channel ID specified in my code is not correct! The developers have been notified of this issue.").then(m => m.delete({ timeout: 5000 }));
            let dm = message.guild.members.cache.find(member => member.id === '347711540700512256')
            dm.send('**A bug has been detected in the bot!**\n\n*Bug:* Reports channel not found when command "report" was run!\n\n Please fix this issue!')
            return;
        }

        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Player Report')
        .setDescription(`A player report was sent by a member in the server. *Please Review.* \nPlease **React with the orange if you are claiming the report and/or looking into it.**\n**React with the tick and cross to indicate the report status. tick = report accepted, cross = report denied**\n\n**+ Person Reported:** ${rMember}\n**+ Reported by:** ${message.author}\n**+ Reason for report:** ${args.slice(1).join(" ")}`);

        message.reply("Your report has been sent to the staff team and is being processed.")
        let msgEmbed = await rChannel.send(embed);
        msgEmbed.react('✅')
        msgEmbed.react('❌')
        msgEmbed.react('🟠')

    }
}