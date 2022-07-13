import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../entity/user';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: ReturnModelType<typeof User>;

  async getUser(data: object) {
    await this.userModel.create(data as User);
    // await this.userModel.findOneAndUpdate(
    //   { name: 'JohnDoe' },
    //   { jobs: ['6666'] }
    // );
    // await this.userModel.findOneAndDelete({ name: 'JohnDoe' });
    return this.userModel.find();
  }
}
