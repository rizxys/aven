module.exports = {
    name: 'messageCreate',
    execute(message) {
        // Ignore bot messages
        if (message.author.bot) return;
        
        // Check if user was AFK and remove AFK status
        if (message.client.afkUsers && message.client.afkUsers.has(message.author.id)) {
            const afkData = message.client.afkUsers.get(message.author.id);
            const afkDuration = Date.now() - afkData.timestamp;
            const durationFormatted = message.client.utils.formatTime(afkDuration);
            
            message.client.afkUsers.delete(message.author.id);
            
            const welcomeBackEmbed = message.client.utils.createEmbed(
                'Welcome Back',
                `Welcome back, ${message.author}! You were AFK for ${durationFormatted}.\nAFK Message: ${afkData.message}`,
                '#000000'
            );
            
            message.reply({ embeds: [welcomeBackEmbed] });
        }
    }
};
