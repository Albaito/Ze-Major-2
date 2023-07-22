require('dotenv').config();
const {
    Client,
    IntentsBitField,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const roles = [
    {
        id: "913619765220765746",
        label: "Hearts of Iron IV"
    },
    {
        id: "919269283282948218",
        label: "Stellaris"
    },
    {
        id: "1132145293543092294",
        label: "MechWarrior Online"
    }
];


client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1058229816630972476')
        if (!channel) return;

        const row = new ActionRowBuilder();
        
        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder()
                .setCustomId(role.id)
                .setLabel(role.label)
                .setStyle(ButtonStyle.Primary)
            );
        });
    
        await channel.send({
            conent: 'Claim or remove a role below.',
            components: [row],
        });
        process.exit();
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN)