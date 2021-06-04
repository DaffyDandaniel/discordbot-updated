module.exports = {
    name: 'startrealm',
    description: "Shows the realm startup message.",
    execute(message, args){
        const channel = message.guild.channels.cache.find(channel => channel.id === '808438626026520576');

        const filter = (m) => m.author.id === message.author.id;

        message.channel.reply('\n\nAre you sure you would like to do this?\n\n(yes/no)\n\n*You have 2 minutes to respond.*')
        message.channel.awaitMessages(filter, { max: 1, time: 120, errors: ['time']}).then((collected) => {
            const msg = collected.first();

            if (msg === 'yes'){
                message.channel.reply('**"yes"** was chosen. The message will be displayed.\n\nThank you.')
                channel.send(`Realm Start Up: Issued by ${message.author}.\n\nI would like to request all smp members to join the realm to have some fun.\n\nSincerely,\n${message.author}\nUserID: ${message.author.id}\n\n||@everyone||`)
            } else if (msg === 'no'){
                message.channel.reply('**no** was chosen. The message has been aborted.\n\nThank you.')
            }
        }).catch(err => {
            return message.channel.reply('Time has expired. The command has been cancelled.')
        })
    }
}