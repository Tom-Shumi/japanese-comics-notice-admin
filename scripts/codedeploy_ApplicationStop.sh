#!/bin/sh
cat scripts/codedeploy_ApplicationStop.sh
echo | cat codedeploy_ApplicationStop.sh 
sudo docker-compose -f /home/ec2-user/japanese-comics-notice-admin/docker-compose.yml down