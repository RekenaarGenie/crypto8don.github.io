from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import Application, CommandHandler, CallbackContext

# Создайте ваш Telegram бот
TOKEN = '7321690711:AAGC0FDwSodg-2gG4lxUyU-3QbTwLl1llXM'

async def start(update: Update, context: CallbackContext) -> None:
    keyboard = [
        [InlineKeyboardButton("Открыть Web App", web_app={"url": "https://example.com/my-game"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Нажмите кнопку ниже, чтобы открыть Web App:', reply_markup=reply_markup)

application = Application.builder().token(TOKEN).build()

start_handler = CommandHandler('start', start)
application.add_handler(start_handler)

application.run_polling()
