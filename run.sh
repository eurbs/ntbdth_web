#!/usr/bin/env bash

echo "Starting watchify.."
./app/static/watchify.sh &
echo "Starting server.."
./run_server.py
