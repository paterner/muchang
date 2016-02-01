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
  class Note {
    constructor() {
      this._url = '';
      this.$ZeptoObj = {};
    }
    _handleEvent() {
      let _this = this;

      _this.$ZeptoObj.biaoqianLabels.on('click', 'li', function(){
        const val = $(this).html()
        let textareaVal = _this.$ZeptoObj.biaoqianTextareaLabel.html()
        let valArr = textareaVal ? textareaVal.split('\&nbsp') : []
        valArr.push(val)
        _this.$ZeptoObj.biaoqianTextareaLabel.html(valArr.join('&nbsp;'))
      })

       _this.$ZeptoObj.saveNoteTag.on('click', function(){
       	const tagsArr = _this.$ZeptoObj.biaoqianTextareaLabel.html().split('\&nbsp;')
       	console.log(tagsArr)
        // request({
        //   url: AjaxConfig.saveNote,
        //   data: {'farmId': '8', 'wechatId': '13', tags:tagsArr},
        //   successCb: function(res) {
        //     console.log(res);
        //   },
        //   errorCb: function(xhr) {
        //     console.log(xhr)
        //   }
        // });
     })
       _this.$ZeptoObj.saveNote.on('click', function(){
       	const val = _this.$ZeptoObj.biaoqianTextarea.find('textarea').val()
        // request({
        //   url: AjaxConfig.saveNote,
        //   data: {'farmId': '8', 'wechatId': '13', val: val},
        //   successCb: function(res) {
        //     console.log(res);
        //   },
        //   errorCb: function(xhr) {
        //     console.log(xhr)
        //   }
        // });
     })
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
        const noteLen = res.list.length
        _this.$ZeptoObj.noteNumber.html(`${noteLen}条笔记`)
        let noteHtml = ''
        res.list.map(item => 
          noteHtml +=`<div class="p15 note_content">
          <span>${(new Date(item.node_date)).toLocaleDateString() + " " + (new Date(item.node_date)).toLocaleTimeString()}</span>
          <div>${item.node_contect}</div>
          </div>`)
        _this.$ZeptoObj.noteContentWrapper.html(noteHtml)
      }
    }

    //Initialize
    init() {
      //Initialize Zepto Object
      this.$ZeptoObj = {
        biaoqianLabels: $('.biaoqian_labels'),
        biaoqianTextareaLabel: $('#biaoqian_textarea_label'),
        biaoqianTypes: $('.biaoqian_types'),
        noteNumber: $('.note_number'),
        noteContentWrapper: $('.note_content_wrapper'),
        saveNoteTag: $('.save_note_tag'),
        saveNote: $('.save_note'),
        biaoqianTextarea : $('.biaoqian_textarea '),
      }
      // this._url = 'http://water.bj.oupeng.com/';
      this._getAllNotes();
      this._getAllTags();
      this._handleEvent();
    }
  }

  //Main
  let note = new Note();
  note.init();
});
