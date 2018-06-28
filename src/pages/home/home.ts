import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results= 0;
  name:string;
  whip:boolean;
 choc:boolean;
  wc:string;
  ch:string;
  price:number;
  value = 0;
  constructor(public navCtrl: NavController) {
  this.price= 10;
  }
  onReset(){
    this.results = 0;
    this.ch = "";
    this.wc='';
    this.whip=false;
    this.choc=false;
    this.name='';

  }
  onPlus(){
   this.results +=1;
   console.log(this.results); 
  }
  onMinus(){
  this.results -=1;
  console.log(this.results);
  }
  onOrder(){
    alert('Please Insert your Name First')
      this.value=1;
      this.price=this.price*this.results;
    }

    onChoc(){
      if(this.choc){
        this.price+=5;
        this.ch = "+Chocolate";
      }else{
        this.ch = "";
    }}
     onWhip(){
        if(this.whip){
          this.price+=5;
        this.wc='+WhippedCream';
      }else{this.wc='';
        
      }
     }
    }
  
