const router = require('koa-router')();
const userBll = require('./../pub/bll/userinfo.js');
const title = '注册';

router.prefix('/reg');

router.get('/', async (ctx, next) => {
  await ctx.render('reg', { title });
});

router.post('/', async (ctx, next) => {

  const result = await userBll.register(ctx);

  ctx.body = result;

});

module.exports = router;