#!/bin/bash -x

cd /home/ubuntu/frontend
directory=$(pwd)
echo "Directory is $directory"
npm i
npm run build
npx kill-port 4001
npm start
echo "Successfully Deployed"