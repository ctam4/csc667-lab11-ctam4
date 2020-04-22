# Kafka lab
https://kafka.apache.org/
Start off by taking a look at this guide: https://learning.oreilly.com/library/view/kafka-the-definitive/9781491936153/ch04.html
driver api here: https://github.com/SOHU-Co/kafka-node 

## conveyor pattern
Decouple input and output processing. If process time is too much, or volumn is too heavy, instead of processing events directly in api handlers, a request can be pushed onto a queue. Consumers can then pick up items off the queue and process them on their own time. More consumers can be added to process items faster, but this number is decoupled from the producers.

## Getting started
get latest images
```
docker-compose pull 
```

## Start services
```
docker swarm init
docker stack deploy -c docker-compose.yml kafka-demo
```

## Run demo apps
```
node consumerTest.js
node producerTest.js
```

## Todo for lab
- Implement a simple 1 producer 1 consumer conveyor
- Create a basic express app with 2 endpoints
- each endpoint adds an item to a different queue topic
- Create a simple consumer to process the item from the queue (just print for now) (2 instances total)