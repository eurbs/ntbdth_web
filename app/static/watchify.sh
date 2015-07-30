#!/bin/bash

echo "Starting watchify.."
watchify -t coffee-reactify scripts/index.cjsx --debug -o build/build.js
