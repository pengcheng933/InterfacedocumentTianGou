(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{429:function(s,a,t){"use strict";t.r(a);var n=t(65),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"用户信息接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户信息接口"}},[s._v("#")]),s._v(" 用户信息接口")]),s._v(" "),t("h2",{attrs:{id:"用户注册发送验证码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户注册发送验证码"}},[s._v("#")]),s._v(" 用户注册发送验证码")]),s._v(" "),t("ul",[t("li",[s._v("请求方式"),t("strong",[s._v("GET")])]),s._v(" "),t("li",[s._v("请求地址"),t("strong",[s._v("http:10.7.178.116:3000/api/getMailCode")])]),s._v(" "),t("li",[s._v("请求参数(用于接受验证码的邮箱)"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("params"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    email=xxx@qq.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("返回参数\n"),t("ul",[t("li",[s._v("成功")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'发送验证码成功'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("ul",[t("li",[s._v("失败")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'发送失败'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[s._v("#")]),s._v(" 注册")]),s._v(" "),t("ul",[t("li",[s._v("请求方式"),t("strong",[s._v("POST")])]),s._v(" "),t("li",[s._v("请求地址"),t("strong",[s._v("http:10.7.178.116:3000/api/register")])]),s._v(" "),t("li",[s._v("请求参数"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    username='用户名字'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    password='用户密码'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    code='验证码'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("返回参数\n"),t("ul",[t("li",[s._v("成功")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'注册成功'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("ul",[t("li",[s._v("失败")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("err(具体失败信息)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"用户登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户登录"}},[s._v("#")]),s._v(" 用户登录")]),s._v(" "),t("ul",[t("li",[s._v("请求方式"),t("strong",[s._v("POST")])]),s._v(" "),t("li",[s._v("请求地址"),t("strong",[s._v("http:10.7.178.116:3000/api/signin")])]),s._v(" "),t("li",[s._v("请求参数(用于接受验证码的邮箱)")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("  body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username='用户名字'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password='用户密码'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("返回参数\n"),t("ul",[t("li",[s._v("成功（token后面身份验证标识）")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'登录成功'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ntoken"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'Bearer '+tokenStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("ul",[t("li",[s._v("失败")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("err(具体失败信息)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);