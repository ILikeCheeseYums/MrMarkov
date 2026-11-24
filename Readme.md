# mrmarkov

A Discord bot that reads messages from your server, saves them to a text file, and generates random replies using a 5th-order character Markov chain

Whenever someone posts in a channel the bot can see, it appends their message to corpus.txt. 50% of the time it builds a frequency map of n-character chunks from that file and generates a reply up to the specified charecter length

## Setup

Install Node.js (v18 or newer) before starting.

### 1. Create the bot on Discord

1. Open the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Go to the Bot tab and click Reset Token to copy your token.
3. Scroll down to Privileged Gateway Intents on that same page and enable Message Content Intent so the bot can read messages.
4. Open OAuth2 > URL Generator, check bot select Send Messages and Read Message History and use the generated link to invite the bot to your server

### 2. Install and configure

Clone the repository and install dependencies:

```bash
git clone https://github.com/ILikeCheeseYums/MrMarkov.git
cd MrMarkov
npm install
```

Create a .env file in the root folder with your token:

```env
DISCORD_TOKEN="your token"
```

Create corpus.txt in the root directory and add some starter text.

```bash
echo "hello world this is some starter text for the bot" > corpus.txt
```

### 3. Run the bot

```bash
node index.js
```

## Configuration

You can adjust the markov.js and index.js to get diffrent outputs:

- maxLen (default 250 in markov.js): Maximum character length of a generated reply
- order (default 5 in markov.js): Number of characters per chunk also Lower values produce random gibberish
- 0.5 (in index.js): Probability that the bot replies to an incoming message (0.5 equals a 50% chance) and goes all the way upto 1
