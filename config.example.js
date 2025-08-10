module.exports = {
    // Bot Configuration
    token: process.env.DISCORD_TOKEN,
    prefix: process.env.PREFIX || ',',
    
    // Bot Appearance
    embedColor: '#FF6B6B',
    footerText: 'Bleed Bot Clone | Made with ❤️',
    
    // Cooldowns (in seconds)
    cooldowns: {
        default: 3,
        moderation: 5,
        utility: 3,
        tags: 3
    },
    
    // Permissions
    requiredPermissions: [
        'SendMessages',
        'EmbedLinks',
        'UseExternalEmojis',
        'AddReactions'
    ],
    
    // Features
    features: {
        moderation: true,
        utility: true,
        tags: true,
        afk: true,
        welcome: true,
        logging: true
    },
    
    // Welcome Messages
    welcome: {
        enabled: true,
        channel: 'general', // Channel name or ID
        message: 'Welcome {user} to {server}! 🎉'
    },
    
    // Logging
    logging: {
        enabled: true,
        channel: 'mod-logs', // Channel name or ID
        events: ['ban', 'kick', 'nickname', 'role', 'channelLock', 'channelUnlock']
    }
};
