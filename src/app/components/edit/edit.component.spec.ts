import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {EditComponent} from './edit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {By} from "@angular/platform-browser";


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let userServiceSpyObj: jasmine.SpyObj<UsersService>;
  let activeUserServiceSpyObj: jasmine.SpyObj<ActiveUserService>
  let routerSpyObj: jasmine.SpyObj<Router>

  const initialFormValues = {
    name: '',
    location: '',
    age: '',
    about: '',
    likes: [''],
    dislikes: ['']
  };

  const validatedFields = {
    name: 'Zane Wilson',
    location: 'Omaha',
    age: '28',
    about: 'This is my about me',
  };

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const userServiceSpy = jasmine.createSpyObj('UsersService',['editUser','getUserById']);
    const activeUserServiceSpy = jasmine.createSpyObj('ActiveUserService', ['getActiveUser'] )

    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        FormBuilder, ActiveUserService,
        //{provide: ActiveUserService, useValue: activeUserServiceSpy},
        {provide: UsersService, useValue: userServiceSpy},
        {provide: Router, useValue: routerSpy}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    userServiceSpyObj = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    //activeUserServiceSpyObj = TestBed.inject(ActiveUserService) as jasmine.SpyObj<ActiveUserService>;
    routerSpyObj = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', inject([ActiveUserService],(activeUserService: ActiveUserService) => {
    spyOn(activeUserService, 'getActiveUser').and.returnValue('1');
    expect(component).toBeTruthy();
  }));

  it('fails field validation if fields are invalid', () => {
    expect(component.editForm?.controls['name'].invalid).toBeTruthy();
    expect(component.editForm?.controls['location'].invalid).toBeTruthy();
    expect(component.editForm?.controls['age'].invalid).toBeTruthy();
    expect(component.editForm?.controls['about'].invalid).toBeTruthy();
  })

  it('passes field validation if fields are valid', () => {
    component.editForm?.setValue({
      ...initialFormValues,
      ...validatedFields
    });

    expect(component.editForm?.controls['name'].valid).toBeTruthy();
    expect(component.editForm?.controls['location'].valid).toBeTruthy();
    expect(component.editForm?.controls['age'].valid).toBeTruthy();
    expect(component.editForm?.controls['about'].valid).toBeTruthy();
  })

  it('fails validation when form is invalid', () => {
    component.editForm?.setValue(initialFormValues);

    expect(component.editForm?.invalid).toBeTrue()
  })

  it('passes validation when form is valid', () => {
    component.editForm?.setValue({
      ...initialFormValues,
      ...validatedFields
    })

    expect(component.editForm?.valid).toBeTrue()
  })

  it('submits edit form', inject([ActiveUserService],(activeUserService: ActiveUserService) => {
    spyOn(activeUserService, 'getActiveUser').and.returnValue('1');

    component.user = userServiceSpyObj.getUserById('1');

    component.editForm?.setValue({
      ...initialFormValues,
      ...validatedFields,
    })



    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(routerSpyObj.navigate).toHaveBeenCalledWith(['/profile', undefined])
   //******************** expect(userServiceSpyObj.editUser).toHaveBeenCalled();
  }))

  it('adds a like', () => {
    component.addLike();
    expect(component.likes.length == 2).toBeTrue()
  })

  it('adds a dislike', () => {
    component.addDislike();

    expect(component.dislikes.length == 2).toBeTrue()
  })

});


// let localStore;
//
// beforeEach(() => {
//   localStore = {};
//
//   spyOn(window.localStorage, 'getItem').and.callFake((key) =>
//     key in localStore ? localStore[key] : null
//   );
//   spyOn(window.localStorage, 'setItem').and.callFake(
//     (key, value) => (localStore[key] = value + '')
//   );
//   spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
// });
