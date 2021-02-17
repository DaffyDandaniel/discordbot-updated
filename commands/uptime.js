const ms = require('ms')

module.exports = {
    name: 'uptime',
    description: "this is the uptime command",
    async execute(message, args){
        message.channel.send(`Uptime: \`${ms(this.client.uptime, { long: true })}\``)
    }
}