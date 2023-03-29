const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "pet",
    description: "🐻 | Gives you a picture of a random pet.",
    options: [
        {
        name: "name",
        description: "Name of the animal",
        type: "STRING",
        required: true
        }
    ],

    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    run: async (client, interaction, args) => {
        const { options } = interaction;

        const animalName = options.getString("name")

        const url = `https://some-random-api.ml/img/${animalName}/`;

        let data, response;

        try{
            response = await axios.get(url);
            data = response.data;
        }catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const animals = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Random ${animalName}`)
        .setImage(data.link)

        await interaction.followUp({ embeds: [animals]})
    }
}