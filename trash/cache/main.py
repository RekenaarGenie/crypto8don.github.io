from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import Application, CommandHandler, ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("Открыть приложение", url='https://rekenaargenie.github.io/2')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Нажмите кнопку, чтобы открыть приложение:', reply_markup=reply_markup)

def main() -> None:
    application = Application.builder().token("7321690711:AAGC0FDwSodg-2gG4lxUyU-3QbTwLl1llXM").build()

    application.add_handler(CommandHandler("start", start))

    application.run_polling()

if __name__ == '__main__':
    main()
