/**
 * Created by sunchi on 2015/1/12.
 */
 "use strict";

//Use fastclick with mobile
import FastClick from "fastclick";
FastClick.attach(document.body);

Zepto(function() {
  class Gonggao {
    constructor() {
      this._url = '';
      this.$ZeptoObj = {};
    }
    _handleEvent() {
      let _this = this;
      
    }
    //Initialize
    init() {
      //Initialize Zepto Object
      this.$ZeptoObj = {
        phoneInput: $('#tsPhone'),
      }
      // this._url = 'http://water.bj.oupeng.com/';
      this._handleEvent();
    }
  }

  //Main
  let gonggao = new Gonggao();
  gonggao.init();
});
