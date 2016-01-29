/**
 * Created by sunchi on 2015/1/28.
 */
 "use strict";
import { request } from "./util/util";
import { AjaxConfig, tempData } from "./util/config";

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

      _this.$ZeptoObj.addGonggaoBtn.on('click', function(){
        _this.$ZeptoObj.addGonggaoWrapper.show(500)
      })

      _this.$ZeptoObj.addGonggaoClose.on('click', function(){
        _this.$ZeptoObj.addGonggaoWrapper.hide(500)
      })

      _this.$ZeptoObj.gonggaoTabBox.find('span').on('click', function(){
        if($(this).hasClass('current')) return;
        $(this).addClass('current').siblings('span').removeClass('current');
      })

      _this.$ZeptoObj.biaoqianLabels.find('li').on('click', function(){
        const val = $(this).html()
        let textareaVal = _this.$ZeptoObj.biaoqianTextareaLabel.html()
        let valArr = textareaVal ? textareaVal.split('\&nbsp') : []
        valArr.push(val)
        _this.$ZeptoObj.biaoqianTextareaLabel.html(valArr.join('&nbsp'))
      })
    }
    _getUserType() {
      let _this = this;
      // request({
      //   url: AjaxConfig.publicInit,
      //   data: {'farmId': '8', 'wechatId': '13'},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.publicInit;
      console.log(res)
      if(200 == res.returnMessage) {
        '管理者' == res.map.roleName ? _this._getAdminData() : _this._getUserData();
      }
    }
    _getAdminData() {
      //Init Dom
      this.$ZeptoObj.gonggaoTab.show();
      this.$ZeptoObj.gonggaoContent.show();
    }
    _getUserData() {
      //Init Dom
    }
    //Initialize
    init() {
      //Initialize Zepto Object
      this.$ZeptoObj = {
        phoneInput: $('#tsPhone'),
        addGonggaoBtn: $('#add_gonggao_btn'),
        addGonggaoWrapper: $('#add_gonggao_wrapper'),
        addGonggaoClose: $('#add_gonggao_close'),
        gonggaoTabBox: $('.gonggao-tab-box'),
        biaoqianLabels: $('.biaoqian_labels'),
        biaoqianTextareaLabel: $('#biaoqian_textarea_label'),
        gonggaoTab: $('.gonggao-tab'),
        gonggaoContent: $('.gonggao-content'),
      }
      // this._url = 'http://water.bj.oupeng.com/';
      this._getUserType();
      this._handleEvent();
    }
  }

  //Main
  let gonggao = new Gonggao();
  gonggao.init();
});
