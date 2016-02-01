/**
 * Created by sunchi on 2015/1/28.
 */
 "use strict";
import { request } from "./util/util";
import { AjaxConfig, tempData } from "./util/config";
var Highcharts = require('highcharts');

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
    _getAllNotes() {
      let _this = this;
      // request({
      //   url: AjaxConfig.getAllNotes,
      //   data: {'farmId': '8', 'wechatId': '13'},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.getAllNotes;
      console.log(res)
      if(200 == res.returnMessage) {
        //To do
      }
    }

    _getAllTags() {
      let _this = this;
      // request({
      //   url: AjaxConfig.getAllTags,
      //   data: {},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.getAllTags;
      console.log(res)
      if(200 == res.returnMessage) {
        let LableTypeNameText = ''
        res.labelInfo.map(item => {
          LableTypeNameText += (`<li>${item.LableTypeName}</li>`)
        })
        _this.$ZeptoObj.biaoqianTypes.find('ul').html(LableTypeNameText)
        _this.$ZeptoObj.biaoqianTypes.find('ul li').eq(0).addClass('on')
        _this.$ZeptoObj.biaoqianTypes.find('ul li').on('click', function(){
          $(this).addClass('on').siblings().removeClass('on')
          const val = $(this).html()
          let LableText = ''
          const LableArr = res.labelInfo.filter(item => item.LableTypeName === val)
          LableArr[0].Lable.map(item => {
            LableText += (`<li>${item.lableName}</li>`)
          })
          _this.$ZeptoObj.biaoqianLabels.find('ul').html(LableText)
        })
      }
    }

    _drawChart() {
      var chart = Highcharts.chart('gonggao-count-chart', {
          credits: {
            enabled: false
          },
          chart: {
            type: 'area',
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: ['卧床', '修蹄', '剩料', '乳房炎', '异常牛' ]
          },
          yAxis: {
            title: {
                text: ''
            }
          },
          plotOptions: {
            area: {
               dataLabels: {
                    enabled: true
                },
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                },
                color: '#B0F7E5',
            }
          },
          series: [{
            name: '',
            data: [3, 2, 2, 1, 1]
          }],
          
            // ... more options - see http://api.highcharts.com/highcharts 
        });
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
        biaoqianTypes: $('.biaoqian_types'),
        gonggaoCountChart: $('#gonggao-count-chart'),
      }
      // this._url = 'http://water.bj.oupeng.com/';
      this._getUserType();
      this._getAllNotes();
      this._getAllTags();
      this._handleEvent();
      this._drawChart();
    }
  }

  //Main
  let gonggao = new Gonggao();
  gonggao.init();
});
