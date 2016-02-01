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

      _this.$ZeptoObj.gonggaoCountIntro.on('click', function(){
        _this.$ZeptoObj.addTongjiWrapper.show(500)
      })

      _this.$ZeptoObj.addTongjiClose.on('click', function(){
        _this.$ZeptoObj.addTongjiWrapper.hide(500)
      })

      _this.$ZeptoObj.gonggaoTabBox.find('span').on('click', function(){
        if($(this).hasClass('current')) return;
        $(this).addClass('current').siblings('span').removeClass('current');
        let type = $(this).attr('id');
        $('#admin' + type).show().siblings('.gonggao-type').hide();
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
      console.log(res);
      if(200 == res.returnMessage) {
        '管理者' == res.map.roleName ? _this._getAdminData() : _this._getUserData();
      }
    }
    _getAdminData() {
      //Init Dom
      this.$ZeptoObj.gonggaoTab.show();
      this.$ZeptoObj.gonggaoContent.show();
      // request({
      //   url: AjaxConfig.personNoticeSelect,
      //   data: {},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.personNoticeSelect;
      console.log(res, 'personNoticeSelect');
      if(200 == res.returnMessage) {
        this.$ZeptoObj.gonggaoAllTitle.html(res.day_number);
        let labels = ''
            , _html = '<ul>'
            , _weekHtml = '<ul>';
        res.returnList.forEach((item) => {
          item.listLabelName.forEach((label) => {
            labels += ('# ' + label.lableName + ' ');
          });
          _html += `<li><div class="clearfix gonggao-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> <span class="head_title">${item.jobName.slice(0, 1)}</span></div><div class="gonggao-message"><div class="clearfix"><h3 class="fl">${item.aliss}</h3><span class="f10 c_999 fr">${item.createTime}</span></div><p class="f11 gonggao-message-context">${item.contect}</p><p class="f10 c_999 mt32">${labels}</p></div></div><div class="gonggao-button clearfix"><button>${0 == item.returnNumber ? '没有回复' : itme.returnNumber + '条未回复'}</button><button class=""><span class="pr">${item.unConfirmed_population}条未确认<i></i></span></button></div></li>`;
          _weekHtml += `<li class="gonggao-note-item"><div class="note-list-date"><span class="note-list-day">25</span><span class="note-list-month">12月</span></div><div class="gonggao-list"><ul><li><div class="gonggao-list-tags">${labels}</div><div class="clearfix gonggao-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> <span class="head_title">${item.jobName.slice(0, 1)}</span></div><div class="gonggao-message"><div class="clearfix"><h3 class="fl">${item.aliss}</h3><span class="f10 c_999 fr">${item.createTime}</span></div><p class="f11 gonggao-message-context">${item.contect}</p><p class="f10 c_999 mt32">${labels}</p></div></div><div class="gonggao-button clearfix"><button>${0 == item.returnNumber ? '没有回复' : itme.returnNumber + '条未回复'}</button><button><span class="pr">${item.unConfirmed_population}条未确认<i></i></span></button></div></li></ul></div></li>`
          labels = '';
        });
        _html += '</ul>';
        this.$ZeptoObj.gonggaoAllList.append(_html);
        this.$ZeptoObj.gonggaoNoteList.append(_weekHtml);

        //Get Week Data
        this.$ZeptoObj.gonggaoWeekTitle.text(res.day_number);
        // request({
        //   url: AjaxConfig.weekStatis,
        //   data: {},
        //   successCb: function(res) {
        //     console.log(res);
        //   },
        //   errorCb: function(xhr) {
        //     console.log(xhr)
        //   }
        // });
        let chartRes = tempData.weekStatis;
        if(200 == chartRes.returnMessage) {
          this._drawChart(chartRes);
        }
      }
    }
    _getUserData() {
      //Init Dom
      this.$ZeptoObj.gonggaoTab.hide();
      this.$ZeptoObj.gonggaoContent.hide();
      // request({
      //   url: AjaxConfig.personNoticeSelect,
      //   data: {},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.personNoticeSelect;
      console.log(res, 'personNoticeSelect');
      if(200 == res.returnMessage) {
        let labels = ''
            , _html = '<ul>';
        res.returnList.forEach((item) => {
          item.listLabelName.forEach((label) => {
            labels += ('# ' + label.lableName + ' ');
          });
          console.log(labels)
          _html += `<li><div class="clearfix gonggao-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> <span class="head_title">${item.jobName.slice(0, 1)}</span></div><div class="gonggao-message"><div class="clearfix"><h3 class="fl">${item.aliss}</h3><span class="f10 c_999 fr">${item.createTime}</span></div><p class="f11 gonggao-message-context">${item.contect}</p><p class="f10 c_999 mt32">${labels}</p></div></div><div class="gonggao-button clearfix"><button>${0 == item.returnNumber ? '没有回复' : itme.returnNumber + '条未回复'}</button><button class="confirm"><span class="pr">${item.unConfirmed_population}条未确认<i></i></span></button></div></li>`;
          labels = '';
        });
        _html += '</ul>';
        this.$ZeptoObj.gonggaoAllList.append(_html);
      }
    }

    _drawChart(data) {
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
            categories: ['listNaiTing', 'listSiWei', 'listShouYi', 'listFanyu' ]
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
                lineWidth: 0,
                marker: {
                    fillColor: '#37be9d',
                    lineWidth: 3,
                    lineColor: '#6EECCE'
                },
                color: '#B0F7E5',
            }
          },
          series: [{
            name: '',
            data: [data.listNaiTing, data.listSiWei, data.listShouYi, data.listFanyu]
          }],
          legend: {
            enabled: false
          },
            // ... more options - see http://api.highcharts.com/highcharts 
        });
    }

    //Initialize
    init() {
      //Initialize Zepto Object
      this.$ZeptoObj = {
        addGonggaoBtn: $('#add_gonggao_btn'),
        addGonggaoWrapper: $('#add_gonggao_wrapper'),
        addTongjiWrapper: $('#add_tongji_wrapper'),
        addGonggaoClose: $('#add_gonggao_close'),
        addTongjiClose: $('#add_tongji_close'),
        gonggaoTabBox: $('.gonggao-tab-box'),
        gonggaoTab: $('.gonggao-tab'),
        gonggaoContent: $('.gonggao-content'),
        biaoqianTypes: $('.biaoqian_types'),
        gonggaoCountChart: $('#gonggao-count-chart'),
        gonggaoAllList: $('#gonggaoAllList'),
        adminAll: $('#adminAll'),
        gonggaoAllTitle: $('#gonggaoAllTitle'),
        gonggaoWeekTitle: $('#gonggaoWeekTitle'),
        gonggaoNoteList: $('.gonggao-note-list'),
        gonggaoCountIntro: $('.gonggao-count-intro'),
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
