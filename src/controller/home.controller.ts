import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  HttpCode,
} from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { Encryption } from '../middleware/report.middleware';
@Controller('/')
export class HomeController {
  @Get('/')
  async getUser(@Query() data: object): Promise<object> {
    return data;
  }

  @Post('/update', { middleware: [Encryption] })
  @HttpCode(200)
  async updateData(
    @Body() data: object,
    @Query() data2: object
  ): Promise<object> {
    return { data, data2 };
  }

  @Get('/aa/:uid')
  @HttpCode(200)
  async home2(@Param('uid') uid: number): Promise<IUserOptions> {
    return { uid };
  }
}
