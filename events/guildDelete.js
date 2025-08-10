module.exports = {
    name: 'guildDelete',
    execute(guild) {
        console.log(`👋 Left guild: ${guild.name} (id: ${guild.id})`);
        console.log(`📊 Now serving ${guild.client.guilds.cache.size} guilds`);
    }
};
