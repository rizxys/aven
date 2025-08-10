# Bleed Bot Clone 🤖

A comprehensive Discord bot that replicates the core functionalities and user experience of the popular "Bleed" bot. This bot includes moderation tools, utility features, and a tag system.

## ✨ Features

### 🛡️ Moderation Commands
- **Kick** - Remove users from the server
- **Ban** - Ban users with optional duration
- **Unban** - Unban users by ID
- **Clear** - Delete multiple messages
- **Force Nickname** - Force change user nicknames
- **Unforce Nickname** - Reset user nicknames to username
- **Lock** - Lock channels to prevent messages
- **Unlock** - Unlock channels to allow messages
- **Role Add** - Add roles to users

### 🛠️ Utility Commands
- **Ping** - Check bot latency
- **Help** - Interactive help menu
- **Info** - Bot, server, and user information
- **Avatar** - Show user avatars
- **Uptime** - Bot uptime information
- **AFK** - Set AFK status with custom message

### 📝 Tag System
- **Tag Create** - Create custom tags with content
- **Tag Delete** - Delete existing tags
- **Tag List** - View all available tags
- **Tag View** - View specific tag content

### 📊 Information Commands
- **Serverinfo** - Detailed server statistics
- **Userinfo** - User profile information
- **Botinfo** - Bot statistics and information
- **Roleinfo** - Role details

## 🚀 Installation

### Prerequisites
- Node.js 16.9.0 or higher
- npm or yarn package manager
- Discord Bot Token

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/bleed-bot-clone.git
cd bleed-bot-clone
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the root directory:
```env
DISCORD_TOKEN=your_discord_bot_token_here
PREFIX=,
```

### Step 4: Create Discord Bot
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section and click "Add Bot"
4. Copy the bot token and add it to your `.env` file
5. Enable the following Privileged Gateway Intents:
   - ✅ **Presence Intent**
   - ✅ **Server Members Intent**
   - ✅ **Message Content Intent**

### Step 5: Invite Bot to Server
Use this URL (replace `YOUR_BOT_ID` with your bot's client ID):
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot
```

### Step 6: Run the Bot
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## 📋 Required Bot Permissions

The bot requires the following permissions to function properly:

- **Send Messages** - Send messages in channels
- **Embed Links** - Send rich embeds
- **Use External Emojis** - Use custom emojis
- **Add Reactions** - Add reactions to messages
- **Manage Messages** - Delete messages (for clear command)
- **Kick Members** - Kick users from server
- **Ban Members** - Ban users from server
- **Manage Roles** - Manage user roles and nicknames
- **Manage Channels** - Lock/unlock channels

## 🎯 Command Usage

### Moderation Commands
```
,kick @user [reason]           - Kick a user from the server
,ban @user [duration] [reason] - Ban a user (duration: 1h, 1d, 1w)
,unban <user_id> [reason]      - Unban a user by ID
,clear <amount> [@user]        - Delete messages from channel
,forcenickname @user <nickname> - Force change user nickname
,unforcenickname @user         - Reset user nickname to username
,lock [#channel]               - Lock a channel
,unlock [#channel]             - Unlock a channel
,roleadd @user @role           - Add a role to a user
```

### Utility Commands
```
,ping                          - Check bot latency
,help [command]                - Show help menu or command info
,info [bot/server/user]        - Show information
,avatar [@user]                - Show user avatar
,uptime                        - Show bot uptime
,afk [message]                 - Set AFK status
```

### Tag Commands
```
,tag create <name> <content>   - Create a new tag
,tag delete <name>             - Delete a tag
,tag list                      - List all tags
,tag <name>                    - View a specific tag
```

### Information Commands
```
,serverinfo                    - Show server information
,userinfo [@user]              - Show user information
,botinfo                       - Show bot statistics
,roleinfo <role>               - Show role information
```

## 🔧 Configuration

You can customize the bot by editing the `config.example.js` file and renaming it to `config.js`:

```javascript
module.exports = {
    prefix: ',',
    embedColor: '#FF6B6B',
    footerText: 'Bleed Bot Clone | Made with ❤️',
    
    features: {
        moderation: true,
        utility: true,
        tags: true,
        afk: true
    }
};
```

## 📁 Project Structure

```
bleed-bot-clone/
├── commands/
│   ├── moderation/
│   │   ├── kick.js
│   │   ├── ban.js
│   │   ├── unban.js
│   │   ├── clear.js
│   │   ├── forcenickname.js
│   │   ├── unforcenickname.js
│   │   ├── lock.js
│   │   ├── unlock.js
│   │   └── roleadd.js
│   ├── utility/
│   │   ├── ping.js
│   │   ├── help.js
│   │   ├── info.js
│   │   ├── avatar.js
│   │   ├── uptime.js
│   │   └── afk.js
│   └── tags/
│       └── tag.js
├── events/
│   ├── ready.js
│   ├── guildCreate.js
│   ├── guildDelete.js
│   ├── guildMemberAdd.js
│   └── messageCreate.js
├── index.js
├── package.json
├── config.example.js
└── README.md
```

## 🛠️ Development

### Adding New Commands
1. Create a new file in the appropriate category folder under `commands/`
2. Follow the command structure:
```javascript
module.exports = {
    data: {
        name: 'commandname',
        description: 'Command description',
        aliases: ['alias1', 'alias2'],
        usage: '<required> [optional]',
        cooldown: 3
    },
    
    async execute(message, args, client) {
        // Command logic here
    }
};
```

### Adding New Events
1. Create a new file in the `events/` folder
2. Follow the event structure:
```javascript
module.exports = {
    name: 'eventName',
    once: false, // true for events that should only fire once
    execute(...args) {
        // Event logic here
    }
};
```

## 🚨 Troubleshooting

### Common Issues

**Bot doesn't respond to commands:**
- Check if the bot token is correct
- Ensure the bot has the required permissions
- Verify the prefix is set correctly (default: `,`)

**Commands not working:**
- Check if the bot has the necessary permissions
- Ensure the command files are in the correct folders
- Check the console for error messages

**Bot crashes on startup:**
- Verify all dependencies are installed
- Check the `.env` file format
- Ensure Node.js version is 16.9.0 or higher

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you need help with the bot:

1. Check the [Issues](https://github.com/yourusername/bleed-bot-clone/issues) page
2. Create a new issue with detailed information
3. Join our [Discord Server](https://discord.gg/support) for real-time help

## 🙏 Acknowledgments

- Inspired by the original Bleed bot
- Built with [discord.js](https://discord.js.org/)
- Icons and emojis from Discord

---

**Note:** This is a clone/recreation of the Bleed bot's functionality. It is not affiliated with the original Bleed bot developers.
