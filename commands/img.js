const { SlashCommandBuilder } = require ('discord.js');
module.exports = {
    data:new SlashCommandBuilder()
        .setName('whoasked')
        .setDescription('Tell someone that nobody asked'),
    async execute(interaction) {
        await interaction.reply('Nobody asked.')
    }
}