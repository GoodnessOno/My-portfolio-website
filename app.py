# We're using a special tool called Flask to build something fun.
from flask import Flask, render_template, request

# We're creating something called an app using Flask.
app = Flask(__name__)

# This part helps us decide what happens when we visit a special place called the home page.
@app.route("/")
def home():
    # When we visit the home page, we see a special picture called "index.html".
    return render_template("index.html")

# If we're running this program directly, we start our app and show it to the world.
if __name__ == "__main__":
    app.run()

from flask import Flask, render_template, request
from chatbot import chatbot_response
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    user_text = request.args.get('msg')
    return str(chatbot_response(user_text))

if __name__ == "__main__":
    app.run()

from gunicorn.app.base import Application
from gunicorn import util

