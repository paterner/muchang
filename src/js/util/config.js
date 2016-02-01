export const AjaxConfig = {
  publicInit: 'http://api.amnc.net/product_api/v1/public/init', //获取首页信息
  getAllNotes: 'http://api.amnc.net/product_api/v1/notice/get_all_notes',
  getAllTags: 'http://api.amnc.net/product_api/v1/public/get_all_tags',
  personNoticeSelect: 'http://api.amnc.net/product_api/v1/person/person_notice_select', //个人公告查询
  weekStatis: 'http://api.amnc.net/product_api/v1/person/week_statis',
  saveNote: 'http://buxiangpeng.6655.la/amnc-web-front/product_api/notice/save_note'
}
export const tempData = {
  publicInit: {"map":{"id":13,"createTime":"2016-01-25","jobId":5,"mobilePhone":"111111111","aliss":"NULLLLLL","noticeWarniui":1,"roleName":"管理者","headPortrait":"http://7xo9d8.com1.z0.glb.clouddn.com/touxiang?e=1454050658&token=ced3YnKG02EAGoCPw6cucOFTpYPeneSVbNgVPyck:KkrKbt1efJexXbhGuZSC3S9Mbyg=","jobName":"场长","farmName":"123","roleId":2},"returnMessage":"200"},
  getAllNotes: {"list":[{"node_contect":"123123","node_date":1453651200000,"node_id":1},{"node_contect":"456456","node_date":1453651200000,"node_id":2}],"returnMessage":"200"},
  getAllTags: {"labelInfo":[{"LableTypeName":"繁育","Lable":[{"id":1,"createTime":null,"isactive":0,"lableName":"发情","lableTypeName":"繁育"},{"id":2,"createTime":null,"isactive":0,"lableName":"输精","lableTypeName":"繁育"},{"id":3,"createTime":null,"isactive":0,"lableName":"妊检","lableTypeName":"繁育"},{"id":4,"createTime":null,"isactive":0,"lableName":"流产","lableTypeName":"繁育"},{"id":5,"createTime":null,"isactive":0,"lableName":"子宫炎","lableTypeName":"繁育"},{"id":6,"createTime":null,"isactive":0,"lableName":"胎衣不下","lableTypeName":"繁育"}]},{"LableTypeName":"兽医","Lable":[{"id":7,"createTime":null,"isactive":0,"lableName":"接产","lableTypeName":"兽医"},{"id":8,"createTime":null,"isactive":0,"lableName":"早产","lableTypeName":"兽医"},{"id":9,"createTime":null,"isactive":0,"lableName":"乳房炎","lableTypeName":"兽医"},{"id":10,"createTime":null,"isactive":0,"lableName":"蹄病","lableTypeName":"兽医"},{"id":11,"createTime":null,"isactive":0,"lableName":"腹泻","lableTypeName":"兽医"},{"id":12,"createTime":null,"isactive":0,"lableName":"真胃变位","lableTypeName":"兽医"},{"id":13,"createTime":null,"isactive":0,"lableName":"产后瘫痪","lableTypeName":"兽医"},{"id":14,"createTime":null,"isactive":0,"lableName":"酮病","lableTypeName":"兽医"},{"id":15,"createTime":null,"isactive":0,"lableName":"免疫","lableTypeName":"兽医"},{"id":16,"createTime":null,"isactive":0,"lableName":"布病检疫","lableTypeName":"兽医"},{"id":17,"createTime":null,"isactive":0,"lableName":"结核检疫","lableTypeName":"兽医"},{"id":18,"createTime":null,"isactive":0,"lableName":"消毒","lableTypeName":"兽医"}]},{"LableTypeName":"饲喂","Lable":[{"id":19,"createTime":null,"isactive":0,"lableName":"剩料","lableTypeName":"饲喂"},{"id":20,"createTime":null,"isactive":0,"lableName":"干物质采食量","lableTypeName":"饲喂"},{"id":21,"createTime":null,"isactive":0,"lableName":"饲料转化率","lableTypeName":"饲喂"},{"id":22,"createTime":null,"isactive":0,"lableName":"脂蛋比","lableTypeName":"饲喂"},{"id":23,"createTime":null,"isactive":0,"lableName":"尿素氮","lableTypeName":"饲喂"}]},{"LableTypeName":"奶厅","Lable":[{"id":24,"createTime":null,"isactive":0,"lableName":"微生物","lableTypeName":"奶厅"},{"id":25,"createTime":null,"isactive":0,"lableName":"嗜冷菌","lableTypeName":"奶厅"},{"id":26,"createTime":null,"isactive":0,"lableName":"耐热芽孢","lableTypeName":"奶厅"},{"id":27,"createTime":null,"isactive":0,"lableName":"肠杆菌","lableTypeName":"奶厅"},{"id":28,"createTime":null,"isactive":0,"lableName":"体细胞","lableTypeName":"奶厅"},{"id":29,"createTime":null,"isactive":0,"lableName":"清洗","lableTypeName":"奶厅"},{"id":30,"createTime":null,"isactive":0,"lableName":"真空度","lableTypeName":"奶厅"},{"id":31,"createTime":null,"isactive":0,"lableName":"脉动比","lableTypeName":"奶厅"}]},{"LableTypeName":"牛群","Lable":[{"id":32,"createTime":null,"isactive":0,"lableName":"调群","lableTypeName":"牛群"},{"id":33,"createTime":null,"isactive":0,"lableName":"转围产","lableTypeName":"牛群"}]},{"LableTypeName":"犊牛","Lable":[{"id":34,"createTime":null,"isactive":0,"lableName":"弱胎","lableTypeName":"犊牛"},{"id":35,"createTime":null,"isactive":0,"lableName":"初乳","lableTypeName":"犊牛"},{"id":36,"createTime":null,"isactive":0,"lableName":"去角","lableTypeName":"犊牛"},{"id":37,"createTime":null,"isactive":0,"lableName":"去副乳","lableTypeName":"犊牛"},{"id":38,"createTime":null,"isactive":0,"lableName":"断奶","lableTypeName":"犊牛"},{"id":39,"createTime":null,"isactive":0,"lableName":"犊牛腹泻","lableTypeName":"犊牛"},{"id":40,"createTime":null,"isactive":0,"lableName":"犊牛肺炎","lableTypeName":"犊牛"},{"id":41,"createTime":null,"isactive":0,"lableName":"抗体浓度","lableTypeName":"犊牛"},{"id":42,"createTime":null,"isactive":0,"lableName":"垫料","lableTypeName":"犊牛"}]},{"LableTypeName":"卫生","Lable":[{"id":43,"createTime":null,"isactive":0,"lableName":"卧床","lableTypeName":"卫生"},{"id":44,"createTime":null,"isactive":0,"lableName":"饮水槽","lableTypeName":"卫生"},{"id":45,"createTime":null,"isactive":0,"lableName":"采食通道","lableTypeName":"卫生"},{"id":46,"createTime":null,"isactive":0,"lableName":"卧床通道","lableTypeName":"卫生"},{"id":47,"createTime":null,"isactive":0,"lableName":"饲喂通道","lableTypeName":"卫生"}]},{"LableTypeName":"设备","Lable":[{"id":48,"createTime":null,"isactive":0,"lableName":"TMR","lableTypeName":"设备"},{"id":49,"createTime":null,"isactive":0,"lableName":"铲车","lableTypeName":"设备"},{"id":50,"createTime":null,"isactive":0,"lableName":"青贮取料机","lableTypeName":"设备"},{"id":51,"createTime":null,"isactive":0,"lableName":"清粪设备","lableTypeName":"设备"},{"id":52,"createTime":null,"isactive":0,"lableName":"挤奶设备","lableTypeName":"设备"},{"id":53,"createTime":null,"isactive":0,"lableName":"奶罐","lableTypeName":"设备"},{"id":54,"createTime":null,"isactive":0,"lableName":"冷排","lableTypeName":"设备"},{"id":55,"createTime":null,"isactive":0,"lableName":"制冷设备","lableTypeName":"设备"}]},{"LableTypeName":"安全","Lable":[{"id":56,"createTime":null,"isactive":0,"lableName":"灭火器","lableTypeName":"安全"},{"id":57,"createTime":null,"isactive":0,"lableName":"吸烟","lableTypeName":"安全"},{"id":58,"createTime":null,"isactive":0,"lableName":"防火罩","lableTypeName":"安全"}]}],"returnMessage":"200"},
  personNoticeSelect: {"day_number": 2, "returnList":[{"id":9,"createTime":1452646799000,"unConfirmed_population":2,"wid":21,"aliss":"金正恩","contect":"公告消息1","returnNumber":0,"everconfirmed":1,"listLabelName":[{"lableName":"流产"},{"lableName":"早产"},{"lableName":"发情"},{"lableName":"胎衣不下"}],"headPortrait":"http://wx.qlogo.cn/mmopen/VVJEnHgYY2Non96YUibO0dEaW46Y30my82oQMsicIZSBmw0IUmXqZnAviadxVdQHCSPVPANv1g69qMP9NJ2VgFg1tfoXXzDqgX9/0","jobName":"繁育"},{"id":10,"createTime":1454029203000,"unConfirmed_population":2,"wid":21,"aliss":"金正恩","contect":"公告消息2","returnNumber":0,"everconfirmed":1,"listLabelName":[{"lableName":"蹄病"},{"lableName":"结核检疫"},{"lableName":"产后瘫痪"}],"headPortrait":"http://wx.qlogo.cn/mmopen/VVJEnHgYY2Non96YUibO0dEaW46Y30my82oQMsicIZSBmw0IUmXqZnAviadxVdQHCSPVPANv1g69qMP9NJ2VgFg1tfoXXzDqgX9/0","jobName":"繁育"},{"id":16,"createTime":1453996800000,"unConfirmed_population":2,"wid":21,"aliss":"金正恩","contect":"555555566666666633333333333","returnNumber":0,"everconfirmed":1,"listLabelName":[{"lableName":"妊检"},{"lableName":"早产"}],"headPortrait":"http://wx.qlogo.cn/mmopen/VVJEnHgYY2Non96YUibO0dEaW46Y30my82oQMsicIZSBmw0IUmXqZnAviadxVdQHCSPVPANv1g69qMP9NJ2VgFg1tfoXXzDqgX9/0","jobName":"繁育"},{"id":17,"createTime":1453996800000,"unConfirmed_population":2,"wid":21,"aliss":"金正恩","contect":"555555566666666633333333333","returnNumber":0,"everconfirmed":1,"listLabelName":[{"lableName":"妊检"},{"lableName":"早产"}],"headPortrait":"http://wx.qlogo.cn/mmopen/VVJEnHgYY2Non96YUibO0dEaW46Y30my82oQMsicIZSBmw0IUmXqZnAviadxVdQHCSPVPANv1g69qMP9NJ2VgFg1tfoXXzDqgX9/0","jobName":"繁育"},{"id":18,"createTime":1453996800000,"unConfirmed_population":2,"wid":21,"aliss":"金正恩","contect":"555555566666666633333333333","returnNumber":0,"everconfirmed":1,"listLabelName":[{"lableName":"妊检"},{"lableName":"早产"}],"headPortrait":"http://wx.qlogo.cn/mmopen/VVJEnHgYY2Non96YUibO0dEaW46Y30my82oQMsicIZSBmw0IUmXqZnAviadxVdQHCSPVPANv1g69qMP9NJ2VgFg1tfoXXzDqgX9/0","jobName":"繁育"}],"returnMessage":"200"},
  weekStatis: {"listNaiTing":1,"listSiWei":3,"listShouYi":5,"returnMessage":"200","listFanyu":2}
}
