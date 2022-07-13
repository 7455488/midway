import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1656863028863_6067',
  koa: {
    port: 7001,
    globalPrefix: 'api',
  },
  mongoose: {
    client: {
      uri: 'mongodb://localhost:27017/midway',
    },
  },
} as MidwayConfig;
