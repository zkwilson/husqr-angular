import { UsernamePipe } from './username.pipe';
import {LocalStorageService} from "../services/local-storage.service";
import {UsersService} from "../services/users.service";
import {ActiveUserService} from "../services/active-user.service";
import {FriendsService} from "../services/friends.service";

describe('UsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamePipe(new UsersService(new LocalStorageService(), new ActiveUserService(new LocalStorageService()), new FriendsService(new LocalStorageService(), new ActiveUserService(new LocalStorageService()))));
    //const pipe = new UsernamePipe(new UsersService())
    expect(pipe).toBeTruthy();
  });
});
