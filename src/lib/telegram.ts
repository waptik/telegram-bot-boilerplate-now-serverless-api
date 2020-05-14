import {Context as TelegrafContext, Extra} from 'telegraf';
import  {ExtraReplyMessage} from 'telegraf/typings/telegram-types';

const NOW_URL = process.env.VERCEL_URL;


async function init(bot) {
	const botInfo = await bot.telhegram.getMe(bot);
	bot.options.username = botInfo.username;
	console.info('Server has initialized bot username.; ',  botInfo.username);
	  await bot.telegram.deleteWebhook();
}


export async function setWebhook(bot) {
	const botInfo = await bot.telegram.getMe();
	bot.options.username = botInfo.username;
	console.info('Server has initialized bot username using Webhook. ', botInfo.username);

   const getWebhookInfo = await bot.telegram.getWebhookInfo(NOW_URL);

	console.info('getWebhookInfo. ', getWebhookInfo);


	if(getWebhookInfo.url === "") {

    await bot.telegram.setWebhook(NOW_URL);


    console.log('set webhook', NOW_URL);
  return;
   }
    console.log('webhook already defined');
    return;
}

export function toArgs(ctx: TelegrafContext) {
  const regex = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i;
  const parts = regex.exec(ctx.message!.text!.trim());
  if (!parts) {
    return [];
  }
  return !parts[3] ? [] : parts[3].split(/\s+/).filter((arg) => arg.length);
}

export const MARKDOWN = Extra.markdown(true) as ExtraReplyMessage;

export const NO_PREVIEW = Extra.markdown(true).webPreview(false) as ExtraReplyMessage;

export const hiddenCharacter = '\u200b';

export default init;

