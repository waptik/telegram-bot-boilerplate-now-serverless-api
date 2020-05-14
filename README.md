Telegram Bot Boilerplate with Vercel's Serverless Functions [@VercelServerlessFunctionsBot](https://t.me/VercelServerlessFunctionsBot)
======================

This template  is a fork of [Telegram Bot Boilerplate](https://github.com/yakovlevyuri/telegram-bot-boilerplate) framework to be used with [Vercel's Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction). Easily deploy to [Vercel](https://vercel.com).

## Before you start
First rename `.env-sample` file to `.env` and fill in all necessary values.
```
BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
IS_NOW="<TRUE_IF_PRODUCTION>"
VERCEL_URL="<THE_URL_OF_YOUR_WEBHOOK>"


```


## Start your server

```
yarn install
yarn dev
```

## Deploy to Now
For deployment just change `.env` with your production values. 

```
BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
IS_NOW=TRUE
```

And add `VERCEL_URL` variable in [Environment Variables UI](https://vercel.com/blog/environment-variables-ui).

You can also add all your variables in Environment Variables UI (preferred) then push to GitHub.

```
 git push
```

Pull Requests are welcomed 😉
