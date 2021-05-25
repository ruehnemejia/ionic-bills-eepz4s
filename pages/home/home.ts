import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appliance: string;
  watts: number;
  hrs: number;
  peso: number;

  consumption: number;
  consMonth: number;
  consYear: number;

  cost: number;
  costMonth: number;
  costYear: number;

  day:number;
  aircon: string;
  kettle: string;
  fan: string;
  laptop: string;
  tv: string;
  washing: string;
  message: string;

  constructor(public navCtrl: NavController) {

  }
calculate(){
   if (this.appliance = "aircon"){
    this.watts = 1913;
  } else if (this.appliance = "kettle") {
    this.watts = 600;
  } else if (this.appliance = "fan") {
    this.watts = 80;
  } else if (this.appliance = "laptop") {
    this.watts = 225;
  } else if (this.appliance = "tv") {
    this.watts = 180;
  } else if (this.appliance = "washing") {
    this.watts = 585;
  } else {
    this.message = "Please select an appliance";
  }
  this.consumption = this.watts*this.hrs / 1000;
  this.consMonth = this.consumption*30;
  this.consYear = this.consumption*365;

  this.cost = this.consumption*this.peso;
  this.cost = parseFloat(this.cost.toFixed(2));
  this.costMonth = this.cost*31;
  this.costYear = this.cost*365.5;

}

}
