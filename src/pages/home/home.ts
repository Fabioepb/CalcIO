import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  operacion: string;
  num1: number;
  num2: number;
  Regexp: any;
  op: string;
  resultado:any;

  constructor(public navCtrl: NavController) {
    this.operacion ="";
    this.Regexp = /([0-9]+(\+|\-|\*|\/)?)+$/;
  }

  addnum(num: string){
      this.operacion += num;
  }

  addop(oper: string){
      this.operacion += oper;
      this.op = oper;
  }

  processop(){
     if(this.Regexp.test(this.operacion)){
        this.resultado = eval(this.operacion);
        this.operacion = this.resultado;
     }else{
       this.operacion = "Esa verga ta mala";
     }
/*     switch (this.op) {
      case "+":
        this.num1 = parseFloat(this.operacion.split(this.op)[0]);
        this.num2 = parseFloat(this.operacion.split(this.op)[1]);
        this.resultado = this.num1 + this.num2;
        break;
      case "-":
        this.num1 = parseFloat(this.operacion.split(this.op)[0]);
        this.num2 = parseFloat(this.operacion.split(this.op)[1]);
        this.resultado = this.num1 - this.num2;
        break;
      case "/":
        this.num1 = parseFloat(this.operacion.split(this.op)[0]);
        this.num2 = parseFloat(this.operacion.split(this.op)[1]);
        this.resultado = this.num1 / this.num2;
        break;
      case "x":
        this.num1 = parseFloat(this.operacion.split(this.op)[0]);
        this.num2 = parseFloat(this.operacion.split(this.op)[1]);
        this.resultado = this.num1 * this.num2;
        break;
      default:
        break; 
    }*/
  }

  clearop(){
    this.operacion = "";
  }

  returnresult(){
    this.operacion = this.resultado;
  }
}
