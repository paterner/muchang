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
        biaoqianTextareaLabel: $('#biaoqian_textarea_label')
      }
      // this._url = 'http://water.bj.oupeng.com/';
      this._handleEvent();
    }

    ajax(type, url, data, success, error) {
      $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonpCallback: 'jsonp',
        timeout: 300,
        success: function(data){
          success(data)
        },
        error: function(xhr, type){
          error()
        }
      })
    }
  }

  //Main
  let gonggao = new Gonggao();
  gonggao.init();
});
