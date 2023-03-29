const { MessageEmbed } = require('discord.js')
const ec = require("../../settings/embed")

module.exports = {
    name: "suggestions",
    description: "Suggestions command",
    emoji: '✅',

    run: async(client, message, args, Discord) => {

        let suggestChannel = message.mentions.channels.first();
        let suggestDescription = args.slice(1).join(' ');

        if(!suggestChannel) return message.channel.send("Please mention a channel name and then the description")
        if(!suggestDescription) return message.channel.send("Please mention a channel name and then the description")

        let embedSuggest = new MessageEmbed()
        .setTitle('New Suggestion')
        .setColor(ec.color)
        .addFields(
          { name: 'Author', value: message.author.toString(), inline: true },
          { name: 'From channel', value: message.channel.name, inline: true },
          { name: 'Suggestion', value: suggestDescription },
        )
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        let msgEmbed = await suggestChannel.send({embeds: [embedSuggest]});
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    
    }
}