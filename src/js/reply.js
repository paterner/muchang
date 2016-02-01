/**
 * Created by sunchi on 2015/1/28.
 */
 "use strict";
import { request, getQuery } from "./util/util";
import { AjaxConfig, tempData } from "./util/config";

//Use fastclick with mobile
import FastClick from "fastclick";
FastClick.attach(document.body);

Zepto(function() {
  class Reply {
    constructor() {
      this._query = {};
      this.$ZeptoObj = {};
    }
    _handleEvent() {
      let _this = this;

      _this.$ZeptoObj.backBtn.on('click', function() {
        window.history.go(-1);
      });

      _this.$ZeptoObj.clearBtn.on('click', function() {
        _this.$ZeptoObj.clearBtn.hide();
        _this.$ZeptoObj.confirmBtn.show();
        _this.$ZeptoObj.replyMessageList.addClass('clear');
      });

      _this.$ZeptoObj.replyMessageOld.on('click', function() {
        window.location.href = 'reply_old_message.html?form=old&contect=' + encodeURI(_this._query['contect']);
      });

      $('.reply-message-icon').find('i').on('click', function() {
        $(this).parents('.reply-message-icon').toggleClass('on');
      });
    }
    _getAllReply() {
      if('top' == this._query['form']) {
        this._getReply();
      }
      else {
        this._getMessageReply();
      }
    }
    _getReply() {
      let _this = this;
      // request({
      //   url: AjaxConfig.getReply,
      //   data: {},
      //   successCb: function(res) {
      //     console.log(res);
      //   },
      //   errorCb: function(xhr) {
      //     console.log(xhr)
      //   }
      // });
      let res = tempData.getReply
          , _html = '<ul>';
      console.log(res)
      if(200 == res.returnMessage) {
        res.list.forEach(item => {
          _html += `<li><div class="clearfix reply-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> </div><div class="reply-message"><div class="clearfix mt10"><h3 class="fl">${item.aliss}</h3><span class="f9 c_999 fr">${item.returnTime}</span></div><p class="f14 reply-message-context">${item.contect}</p></div></div></li>`;
        });
        _html += '</ul>';
        _this.$ZeptoObj.replyList.append(_html);
      }
    }
    _getMessageReply(list) {
      let _this = this;
      if('list' == this._query['form']) {
        // request({
        //   url: AjaxConfig.getReply,
        //   data: {},
        //   successCb: function(res) {
        //     console.log(res);
        //   },
        //   errorCb: function(xhr) {
        //     console.log(xhr)
        //   }
        // });
        let res = tempData.getReply
            , contect = decodeURI(this._query['contect'])
            , _html = '';
        res.list.forEach(item => {
          _html += `<li><div class="clearfix reply-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> </div><div class="reply-message-left reply-message"><h3 class="">${item.aliss}</h3><p class="reply-context">${item.contect}</p><p class="reply-time">${item.returnTime}</p></div><div class="reply-message-right">${contect}</div><div class="reply-message-icon"><i></i></div></div></li>`;
        });
        _html += '</ul>';
        _this.$ZeptoObj.replyMessageList.append(_html);
      }
      else {
        // request({
        //   url: AjaxConfig.getAllMessage,
        //   data: {},
        //   successCb: function(res) {
        //     console.log(res);
        //   },
        //   errorCb: function(xhr) {
        //     console.log(xhr)
        //   }
        // });
        let res = tempData.getReply
            , contect = decodeURI(_this._query['contect'])
            , _html = '';
        res.list.forEach(item => {
          _html += `<li><div class="clearfix reply-list-wrapper"><div class="list-left"><img src="${item.headPortrait}" alt="" class="head"> </div><div class="reply-message-left reply-message"><h3 class="">${item.aliss}</h3><p class="reply-context">${item.contect}</p><p class="reply-time">${item.returnTime}</p></div><div class="reply-message-right">${contect}</div><div class="reply-message-icon"><i></i></div></div></li>`;
        });
        _html += '</ul>';
        _this.$ZeptoObj.replyMessageList.append(_html);
      }
    }
    //Initialize
    init() {
      //Initialize Zepto Object
      this.$ZeptoObj = {
        replyList: $('.reply-list'),
        replyMessageList: $('.reply-message-list'),
        backBtn: $('.back'),
        clearBtn: $('#clearBtn'),
        replyMessageList: $('.reply-message-list'),
        confirmBtn: $('#confirmBtn'),
        replyMessageOld: $('.reply-message-old'),
      }
      this._query = getQuery();
      this._getAllReply();
      this._handleEvent();
    }
  }

  //Main
  let reply = new Reply();
  reply.init();
});
