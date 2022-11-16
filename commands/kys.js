const { SlashCommandBuilder } = require ('discord.js');
module.exports = {
    data:new SlashCommandBuilder()
        .setName('tellme')
	    .setDescription('Tells you to kys'),
    async execute(interaction) {
	    await interaction.reply('kys')
}
}
