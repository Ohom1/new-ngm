#!/bin/bash

# Move all downloaded images to the images directory
mv *.jpg images/

# Create course images directory if it doesn't exist
mkdir -p images/courses

# Move course-specific images to the courses directory
mv images/web-development.jpg images/courses/
mv images/data-science.jpg images/courses/
mv images/cloud-computing.jpg images/courses/
mv images/cybersecurity.jpg images/courses/
mv images/mobile-dev.jpg images/courses/
mv images/devops.jpg images/courses/
mv images/ai.jpg images/courses/
mv images/ui-ux.jpg images/courses/
mv images/python.jpg images/courses/
mv images/java.jpg images/courses/
mv images/blockchain.jpg images/courses/
mv images/digital-marketing.jpg images/courses/
mv images/networking.jpg images/courses/
mv images/testing.jpg images/courses/
mv images/big-data.jpg images/courses/
mv images/iot.jpg images/courses/
mv images/game-dev.jpg images/courses/
mv images/business-analytics.jpg images/courses/
mv images/cloud-security.jpg images/courses/
mv images/frontend.jpg images/courses/
