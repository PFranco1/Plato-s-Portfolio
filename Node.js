const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File(new winston.transports.Console())
  ]
});

logger.info('This is a log message')

  




