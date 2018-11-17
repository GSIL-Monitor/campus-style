const router = require('koa-router')();

router.prefix('/api');

router.post('/create', async (ctx, next) => {
  console.log('create ctx--->', ctx);
});
