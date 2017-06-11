# Smart Pulse Oximeter Grafana

This is a repository for the AWS Lambda code used to push data
from AWS IoT rules engine to InfluxDB and Grafana. It also
contains the Docker compose file used to setup InfluxDB and
Grafana on AWS EC2.

## Setup

`$ yarn && yarn dist`

## Deploy

`$ yarn deploy`

Based on [babel-lambda-skeleton](https://github.com/larseen/babel-lambda-skeleton)
by Kristofer Larsen.
