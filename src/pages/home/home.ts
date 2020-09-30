import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { FormGroup, AbstractControl,Validators, FormBuilder } from '@angular/forms';
import {NewUserPage} from '../new-user/new-user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:any;
  public password:any;
  userLogin: FormGroup;

  constructor(public navCtrl: NavController,public storage:Storage, public formBuilder: FormBuilder) {

    this.userLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.required,Validators.pattern('[^ @]*@[^ @]*')])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9 ]*')])],
    });

    this.email = this.userLogin.controls['email'];
    this.password = this.userLogin.controls['password'];

  }

  GoTo()
  {
    this.navCtrl.push('NewUserPage');
  }

  log()
  {
    this.navCtrl.push('LoginPage')
  }

  saveTask(){
    let data = {
      username:this.username,
      password:this.password
    }
    this.storage.set('key',data);
  }


}

