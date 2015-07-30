#!/usr/bin/env bash

echo "Starting watchify.."
cd ./app/static/
./watchify.sh &
cd ../../
echo "Starting server.."
./run_server.py
