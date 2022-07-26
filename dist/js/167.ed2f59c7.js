"use strict";(self["webpackChunkbig_event"]=self["webpackChunkbig_event"]||[]).push([[167],{9167:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"articleCase-container"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix header-box",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("文章分类")]),e("el-button",{attrs:{type:"primary"},on:{click:t.addCateBtnFn}},[t._v("添加分类")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cateList,border:"",stripe:""}},[e("el-table-column",{attrs:{label:"序号",type:"index",width:"100"}}),e("el-table-column",{attrs:{label:"分类名称",prop:"cate_name"}}),e("el-table-column",{attrs:{label:"分类别名",prop:"cate_alias"}}),e("el-table-column",{attrs:{align:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.updateCateBtnFn(a.row)}}},[t._v("修改")]),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.deleteCateBtnFn(a.row)}}},[t._v("删除")])]}}])})],1)],1),e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e},closed:t.ondialogCloseFn}},[e("el-form",{ref:"addRef",attrs:{model:t.addForm,rules:t.addRules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"分类名称",prop:"cate_name"}},[e("el-input",{attrs:{minlength:"1",maxlength:"10"},model:{value:t.addForm.cate_name,callback:function(e){t.$set(t.addForm,"cate_name",e)},expression:"addForm.cate_name"}})],1),e("el-form-item",{attrs:{label:"分类别名",prop:"cate_alias"}},[e("el-input",{attrs:{minlength:"1",maxlength:"15"},model:{value:t.addForm.cate_alias,callback:function(e){t.$set(t.addForm,"cate_alias",e)},expression:"addForm.cate_alias"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.cancelFn}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirmFn}},[t._v("确 定")])],1)],1)],1)},i=[],l=a(7877),r={name:"articleCase",data(){return{cateList:[],dialogVisible:!1,isEdit:!1,editId:"",addForm:{cate_name:"",cate_alias:""},addRules:{cate_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{pattern:/^\S{1,10}$/,message:"分类名必须是1-10位的非空字符",trigger:"blur"}],cate_alias:[{required:!0,message:"请输入分类别名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,15}$/,message:"分类别名必须是1-15位的字母数字",trigger:"blur"}]}}},created(){this.initCateListFn()},methods:{async initCateListFn(){const t=await(0,l.I2)();this.cateList=t.data.data},cancelFn(){this.dialogVisible=!1},confirmFn(){this.$refs.addRef.validate((async t=>{if(!t)return console.log("error submit!!"),!1;if(this.isEdit){const{data:t}=await(0,l.R4)({id:this.editId,...this.addForm});if(0!==t.code)return this.$message.error(t.message);this.$message.success(t.message)}else{const{data:t}=await(0,l.pP)(this.addForm);if(0!==t.code)return this.$message.error(t.message);this.$message.success(t.message)}this.initCateListFn(),this.dialogVisible=!1}))},ondialogCloseFn(){this.$refs.addRef.resetFields()},addCateBtnFn(){this.isEdit=!1,this.editId="",this.dialogVisible=!0},updateCateBtnFn(t){console.log(t),this.isEdit=!0,this.editId=t.id,this.dialogVisible=!0,this.$nextTick((()=>{this.addForm.cate_name=t.cate_name,this.addForm.cate_alias=t.cate_alias}))},async deleteCateBtnFn(t){console.log(t);const{data:e}=await(0,l.MX)(t.id);if(0!==e.code)return this.$message.error("删除分类失败！");this.$message.success("删除分类成功！"),this.initCateListFn()}}},n=r,d=a(1001),o=(0,d.Z)(n,s,i,!1,null,"b0270aaa",null),c=o.exports}}]);
//# sourceMappingURL=167.ed2f59c7.js.map