import {TestBed} from '@angular/core/testing';

import {ActiveUserService} from './active-user.service';

describe('ActiveUserService', () => {
  let service: ActiveUserService;

  //let localStore;

  beforeEach(() => {
    // localStore = {};
    //
    // spyOn(window.localStorage, 'getItem').and.callFake((key) => {
    //   return key in localStore ? localStore[key] : null
    // });
    //
    // spyOn(window.localStorage, 'setItem').and.callFake((key, value) => {
    //   (localStore[key] = value + '')
    // })
    //
    // spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    //
    //service.setActiveUser('1')
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set active user', () => {
    let activeUserId = '1'
    service.setActiveUser(activeUserId);

    expect(service.getActiveUser()).toEqual('1')
  })

});
