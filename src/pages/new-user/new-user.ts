import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Storage} from '@ionic/storage'
import {HomePage} from '../home/home'

/**
 * Generated class for the NewUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html',
})
export class NewUserPage {
  formgroup: FormGroup;
  name:any;
  password:any;
  email:any;
  number:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage: Storage) {
  
    this.formgroup = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9^ @]*')])],
      email: ['', Validators.compose([Validators.required,Validators.pattern('[^ @]*@[^ @]*')])],
      number: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.name = this.formgroup.controls['name'].value;
    this.password = this.formgroup.controls['password'].value;
    this.email = this.formgroup.controls['email'].value;
    this.number = this.formgroup.controls['number'].value;

}
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad NewUserPage');
  }

  store()
  {
    let data= {
      'name': this.name,
      'password': this.password,
      'email': this.email,
      'mnumber': this.number
    }


    this.storage.set('key', data);  
    
    this.navCtrl.setRoot(HomePage);
  }

  

}