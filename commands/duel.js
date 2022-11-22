const { SlashCommandBuilder } = require ('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('owoify')
        .setDescription('Owoify a string')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('text to owoify')
                .setRequired(true)),
        async execute(interaction) {
        const ogtext = interaction.options.getString('text')
        let owotext = ogtext
        for(let i = 0; i < 20; i++) {
            owotext = owotext.replace('r', 'w').replace('l', 'w').replace('o', 'u').replace('R', 'W').replace('L', 'W').replace('O', 'U')
        } await interaction.reply({content: owotext, ephemeral: false});
    }
}    