module.exports = {
    name: 'report',
    description: "Report any users for breaking the rules",
    execute(message, args, client){
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember){
            return message.reply("The user you attempted to mention or use in your report message does not exist.").then(m => n.delete(5000));
        }

        if (rMember.roles.cache.has('800460004683415594') || rMember.user.bot){
            return message.reply("You cannot report this person!").then(m => n.delete(5000));
        }

        if (!args[1]){
            return message.channel.send("Please provide a reason for the report!").then(m => n.delete(5000));
        }

        const rChannel = message.guild.channels.cache.find(channel => channel.id === '812100946648760381');

        if (!channel){
            message.channel.send("The reports channel ID specified in my code is not correct! The developers have been notified of this issue.").then(m => n.delete(5000));
            client.users.fetch('347711540700512256').then((user) => {
                user.send('**A bug has been detected in the bot!**\n\n*Bug:* Reports channel not found when command "report" was run!\n\n Please fix this issue!')
            })
        }

        const embed = new RichEmbed()
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Member Report", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Member reported:** ${rMember} (${rMember.id})
            **> Reported by:** ${message.member}
            **> Reason:** ${args.slice(1).join(" ")}`);
        return rChannel.send(embed);
    }
}