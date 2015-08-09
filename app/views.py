from flask import send_file, request

from app import app
import csv


@app.route('/')
def index():
    return send_file('./static/index.html')


@app.route('/answers', methods=['POST'])
def answers():
	# do stuff with csv
	print(request)
	data = request.json['ans']
	print(data)
	return "this is the request: " + data + " and this is the first clue"
