from flask import send_file, request

from app import app
import csv
import json
import os

PATH = os.path.abspath('')

@app.route('/')
def index():
    return send_file('./static/index.html')


@app.route('/answers', methods=['POST'])
def answers():
    # grab the answer attempt
    answerTry = request.json['ans']

    # check (very inefficiently.. next time, database or at least json)
    # if the key that was entered has a match in the first column of the
    # csv
    with open(os.path.join(PATH, 'app', 'answers.csv'), 'rt') as csvfile:
        answerreader = csv.reader(csvfile, delimiter=';')
        for row in answerreader:
            if answerTry == row[0]:
                # todo: figure out how to render an entry with multiple paragraphs
                return json.dumps({'storyline': row[1], 'clue': row[2]})

        # empty string if no answer was found
        return json.dumps({'storyline': "", 'clue': "no clu 4 u"})
