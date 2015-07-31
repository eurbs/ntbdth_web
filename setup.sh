#!/bin/bash

echo "Setting up flacore.."

npm install -g watchify
pip3 install -r requirements.txt

cd app/static
npm install

echo "Done setup"
