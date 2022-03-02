import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {initialUsers} from "../seeds/users";

describe('UsersService', () => {
  let service: UsersService;
  let users = initialUsers

  let addedUser = {
    id: '5',
    name: 'abc',
    username: 'abc',
    password: 'abc123',
    age: 29,
    location: 'Omaha, NE',
    about: 'This is my about me section',
    likes: 'Concerts, Hiking',
    dislikes: 'Annoying people, spiders'
  }

  beforeEach(() => {
    let localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) => {
      return key in localStore ? localStore[key] : null
    });

    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => {
      (localStore[key] = value + '')
    })

    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add user', () => {
    service.addUser(addedUser);

    expect(service.getUsers().length).toEqual(4)
  })

  it('should remove user', () => {
    service.removeUser('1');

    expect(service.getUsers().length).toEqual(2)
    expect(service.getUserById('1')).toEqual(undefined)
  })

  it('should get user by id', () => {
    expect(service.getUserById('1')).toEqual(users[0])
  })

});
