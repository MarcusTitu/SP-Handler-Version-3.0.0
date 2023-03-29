const { Client, MessageEmbed } = require('discord.js');
const ec = require("../../settings/embed");

module.exports = {
    name: 'gunpoint',
    description: '🔫 | Gun point another user.',
    category: 'Fun',
    userPermissions: [],
    type: 'CHAT_INPUT',
    ownerOnly: false,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, message) => {
        const lolz = interaction.guild.members.cache.get(args[0]) || interaction.member;
        const av = lolz.user.displayAvatarURL({ dynamic: false, size: 4096, format: "png" })
        let em = new MessageEmbed()
            .setImage(`https://api.popcat.xyz/gun?image=${av}`)
            .setColor(ec.color)
            .setFooter({
        text: `Requested by ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      }) 
        interaction.followUp({ embeds: [em] });
    }
}