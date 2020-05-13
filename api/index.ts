import {NowRequest, NowResponse} from '@now/node';
import Telegraf from 'telegraf';

import { about, greeting } from '../src';
 import {ok} from '../src/lib/responses';


const debug = require('debug')('bot');

const BOT_TOKEN = process.env.BOT_TOKEN;
const USERNAME = process.env.USERNAME || '';
const PORT = (process.env.PORT && parseInt(process.env.PORT, 10));
const WEBHOOK_URL = `${process.env.BOT_URL}/bot${BOT_TOKEN}`;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  return ctx.reply('This bot helps channel/group owners monetize their communities through self advertisement');
});

bot.command('about', about())
.on('text', greeting());

const production = () => {
  debug('Bot runs in production mode');
  debug(`Bot setting webhook: ${WEBHOOK_URL}`);
  bot.telegram.setWebhook(WEBHOOK_URL);
  debug(`Bot starting webhook on port: ${PORT}`);
  bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);
};

const development = () => {
  debug('Bot runs in development mode');
  debug(`Bot deleting webhook`);
  bot.telegram.deleteWebhook();
  debug(`Bot starting polling`);
  bot.startPolling();
};



// main function
 export default function handle(req: NowRequest, res: NowResponse) {

	if (req.body === undefined) {
		res.send('Nothing to see here...');

	} else {

	console.log('Server has initialized bot with req.body ', req.body);

		process.env.NODE_ENV === 'production' ? production() : development();

  return ok(res);

	}
}

