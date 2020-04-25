const kafka = require('kafka-node');
const HighLevelProducer = kafka.HighLevelProducer;
const Client = kafka.KafkaClient;

const producerOptions = {
  kafkaHost: (process.env.KAFKA_HOST + ":" + process.env.KAFKA_PORT) || 'localhost:9092',
};

class KafkaProducer {
  constructor(topic) {
    this.topic = topic;
    this.producer = null;
  }

  connect(callback) {
    const client = new Client(producerOptions);
    this.producer = new HighLevelProducer(client);
    callback();
  }

  send(message) {
    if (!this.producer) return;
    this.producer.send([
      {
        topic: this.topic,
        messages: [JSON.stringify(message)],
      }
    ],
      (err) => {
        if (err) {
          console.log('Error sending from kafka producer');
          console.log(err);
        }
      });
  }
}

module.exports = KafkaProducer;
