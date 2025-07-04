#!/bin/bash
cd /home/ec2-user/my-next-app
pm2 start npm --name "nextjs-app" -- start
