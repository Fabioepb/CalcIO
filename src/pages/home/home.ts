import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  operation: string;
  num1: number;
  num2: number;
  regExp: any;
  sign: string;
  result:any;

  constructor(public navCtrl: NavController) {
    this.operation ="";
    this.result = "";
    this.regExp = /([0-9]+(\+|\-|\*|\/)?)+$/;
  }

  addNum(num: string){
      this.operation += num;
  }

  addSign(oper: string){
      this.operation += oper;
      this.sign = oper;
  }

  processOp(){
     try {
       if (this.regExp.test(this.operation)) {
         this.result = eval(this.operation);
         this.operation = this.result;
       } else {
         this.operation = "Math Error";
       }
     } catch(error) {
       this.operation = "Missing arguments"
     }
  }

  clearOp(){
    this.operation = "";
  }

  getResult(){
    this.operation = this.result;
  }
}
