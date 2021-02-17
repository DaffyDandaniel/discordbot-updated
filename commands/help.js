module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
        message.channel.send(`
        **__Help__**
    **The prefix for this bot is "?".**

    ***Commands***

    *Commands for Everyone:*
    ?apply - Shows the SMP Application form (You need JAVA minecraft to apply)
    ?ping - Does not show the real ping, but shows a cool message instead.

    *Commands for Server Admin+*
    ?mute <ping player here> - Mutes the pinged player if not muted.
    ?unmute <ping player here> - Unmutes the pinged player if muted.
    ?kick <ping player here> - Kicks the pinged player.
    ?ban <ping player here> - Banned the pinged player.
    `)
    }
}