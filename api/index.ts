import {NowRequest, NowResponse} from '@now/node';
import Telegraf from 'telegraf';

import { about, greeting } from '../src';
 import {ok} from '../src/lib/responses';
import {
startBot,
setWebhook,
} from '../src/lib';



const BOT_TOKEN = process.env.BOT_TOKEN;


const bot = new Telegraf(BOT_TOKEN);

bot.use(Telegraf.log());

bot.start((ctx) => {
  return ctx.reply('This is a test bot.');
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
await setWebhook(bot)

	if (!req.body) {

	ok(res,'Nothing to see here...');
		return;
	};
 

	console.log('Server has initialized bot with req.body ', req.body);

		// info: set webhook in order for `bot​.​handleUpdate` to work
return​ ​bot​.​handleUpdate​(​req​.​body​,​ ​res​)​;​

}

