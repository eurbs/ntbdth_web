from flask import send_file

from app import app


@app.route('/')
def index():
    return send_file('./static/index.html')
