(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views"],{"1d46":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("basic-container",[n("avue-tabs",{attrs:{option:e.option},on:{change:e.handleChange,submit:e.handleSubmit},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)],1)},o=[],s={column:[{label:"个人信息",prop:"info",option:{submitText:"修改",column:[{label:"头像",type:"upload",listType:"picture-img",propsHttp:{res:"data.0"},canvasOption:{text:"avue",ratio:.1},action:"https://avueupload.91eic.com/upload/list",tip:"只能上传jpg/png用户头像，且不超过500kb",span:12,row:!0,prop:"img"},{label:"姓名",span:6,row:!0,prop:"name"},{label:"用户名",span:12,row:!0,prop:"username"},{label:"手机号",span:12,row:!0,prop:"phone"},{label:"个性签名",prop:"detail",span:24,row:!0,type:"textarea",minRows:5,maxRows:8}]}},{label:"修改密码",prop:"password",option:{submitText:"修改",column:[{label:"原密码",span:12,row:!0,type:"password",prop:"oldpassword"},{label:"新密码",span:12,row:!0,type:"password",prop:"newpassword"},{label:"确认密码",span:12,row:!0,type:"password",prop:"newpasswords"}]}}]},p={data:function(){return{type:"info",option:s,form:{}}},created:function(){this.handleWitch()},methods:{handleSubmit:function(){this.$message({message:this.form,type:"success"})},handleWitch:function(){"info"===this.type?this.form={username:"smallwei",name:"smallwei",phone:"1888888888888",detail:"这是一个个性签名"}:"password"===this.type&&(this.form={oldpassword:11111111,newpassword:22222222,newpasswords:22222222})},handleChange:function(e){this.type=e.prop,this.handleWitch()}}},r=p,l=n("2877"),i=Object(l["a"])(r,a,o,!1,null,null,null);t["default"]=i.exports},8021:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("basic-container",[e._v("日志统计")])],1)},o=[],s={name:"wel",data:function(){return{}},computed:{},created:function(){},methods:{}},p=s,r=n("2877"),l=Object(r["a"])(p,a,o,!1,null,"34c40216",null);t["default"]=l.exports},d731:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("basic-container",[e._v("Home Page")])},o=[],s={},p=s,r=n("2877"),l=Object(r["a"])(p,a,o,!1,null,null,null);t["default"]=l.exports}}]);