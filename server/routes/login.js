const router = require('koa-router')();
const userBll = require('./../pub/bll/userinfo.js');
const title = '登录';

router.prefix('/login');

router.get('/', async (ctx, next) => {
  await ctx.render('login', { title });
});

router.post('/', async (ctx, next) => {

  const result = await userBll.login(ctx);

  ctx.body = result;

});

module.exports = router;