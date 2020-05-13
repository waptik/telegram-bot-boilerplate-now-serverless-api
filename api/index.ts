import {NowRequest, NowResponse} from '@now/node';
import Telegraf from 'telegraf';

import { about, greeting } from '../src';
 import {ok} from '../src/lib/responses';
import {startBot, getWebhookCallback} from '../src/lib';



const BOT_TOKEN = process.env.BOT_TOKEN;


const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  return ctx.reply('This bot helps channel/group owners monetize their communities through self advertisement');
});

bot.command('about', about())
.on('text', greeting());


// process.env.IS_NOW is undefined locally,
if (!process.env.IS_NOW) {
	startBot(bot).then(() => {
		console.info('Started bot');
	});
  }


// main function
 export default async function handle(req: NowRequest, res: NowResponse) {

	if (!req.body) {

		ok(res,'Nothing to see here...');
		return;
	};
 

	console.log('Server has initialized bot with req.body ', req.body);

		
	const handler = await getWebhookCallback(bot);
	return handler(req, res);

}

