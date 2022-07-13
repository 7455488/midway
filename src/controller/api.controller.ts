import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/v1')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query() data: object) {
    const user = await this.userService.getUser(data);
    return { success: true, message: 'OK', data: user };
  }
}
