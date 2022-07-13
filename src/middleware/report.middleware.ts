import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';
const md5 = require('md5');

@Middleware()
export class Encryption implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      ctx.request.body.password = md5(ctx.request.body.password);
      return await next();
    };
  }

  static getName(): string {
    return 'encryption';
  }
}
