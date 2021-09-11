const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons')

module.exports = {
    name: 'suggest',
    description: "Suggest Something..",
    async execute(message, args){
        if(!args) return;

        let dm = message.guild.members.cache.find(member => member.id === message.author.id)
        const SuggestionChannel = message.guild.channels.cache.find(c => c.id === '842772716398051338');
        const SuggestionEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("T&LSC Automation")
        .setAuthor(`Suggestion by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("New Suggestion")
        .setDescription(args)

        let suggestionMessage = await SuggestionChannel.send(SuggestionEmbed)
        suggestionMessage.react('✅')
        suggestionMessage.react('❌')
        suggestionMessage.react('❓')


        const confirmedSentEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("T&LSC Automation")
        .setTitle("Suggestion Confirmation")
        .setDescription(`Your suggestion was successfully sent to the Suggestions (<#842772716398051338>) Channel.\n\nSuggestion sent: ${args}`)

        dm.send(confirmedSentEmbed)
        message.react('✅')
    }
}