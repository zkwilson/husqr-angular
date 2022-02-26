import { UsernamePipe } from './username.pipe';
import {LocalStorageService} from "../services/local-storage.service";
import {UsersService} from "../services/users.service";
import {ActiveUserService} from "../services/active-user.service";
import {FriendsService} from "../services/friends.service";
import {TestBed} from "@angular/core/testing";

describe('UsernamePipe', () => {
  let pipe: UsernamePipe;

  beforeEach(() => {
   //pipe = new UsernamePipe(new UsersService(new LocalStorageService(), new ActiveUserService(new LocalStorageService()), new FriendsService(new LocalStorageService(), new ActiveUserService(new LocalStorageService()))));
    TestBed.configureTestingModule({
      providers: [UsersService, LocalStorageService]
    });
    pipe = TestBed.inject(UsernamePipe)
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms a userID to a name', () => {
    expect(pipe.transform('1')).toBe('Jon Williams')
  })

  it('returns undefined if no userID found', () => {
    expect(pipe.transform('123')).toBe(undefined);
  })
});
