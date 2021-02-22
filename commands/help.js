const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "Help Command",
    execute(message, args){
        let dm = message.guild.members.cache.find(member => member.id === message.author.id)
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Help')
        .setDescription('**Miscellaneous:**\n?apply - Shows the application to join the ADO SMP (You require Java to apply)\n?ping - This does not show the real ping but just responds with something else instead.\n\n**Reports:**\n?report <ping user> <reason for report> - Reports the player specified for the specified reason.\n\n**Moderation:**\n?mute <ping person> - Mutes the specified member.\n?unmute <ping person> - Unmutes the specified person if muted.\n?kick <ping person> - Kicks the specified person.\n?ban <ping person> - Bans the specified person.')
        .setFooter('ADO SMP || To contact an administrator please DM any administrators online.');

        message.react('👍')
        MemberDM.send(embed)
        return message.reply('**Please check your DMs!**');
    }
}