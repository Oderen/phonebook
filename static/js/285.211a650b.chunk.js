"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[285],{8285:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(1413),a=t(9439),i=t(2791),s=t(3044),o=t(6729),l=t(2729),u=t(4554),c=t(403),d=t(890),m=t(533),p=t(2722),h=t(9434),g=t(1818),x="SignUpForm_signUpButton__YU+Rt",f="SignUpForm_signUpLink__MtoqH",j=t(184);function y(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.auth.isAuthProblem.isRegProblem})),t=(0,i.useState)(!1),y=(0,a.Z)(t,2),b=y[0],v=y[1],Z={backgroundColor:b?"#2072af":"#003262",transition:"background-color 0.2s ease"},k=(0,i.useState)(!1),w=(0,a.Z)(k,2),S=w[0],U=w[1],C=(0,i.useState)(!1),_=(0,a.Z)(C,2),I=_[0],L=_[1];return(0,h.v9)((function(e){return e.auth.isRefreshing}))?(0,j.jsx)(p.Z,{text:"It may take a while"}):(0,j.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",paddingLeft:10,paddingRight:10},children:(0,j.jsxs)(u.Z,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(s.Z,{sx:{m:1,bgcolor:"#003262"},children:(0,j.jsx)(c.Z,{})}),(0,j.jsx)(d.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,j.jsxs)(u.Z,{component:"form",onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),r=t.get("email"),a=t.get("password");if(""===r)return U(!0);if(U(!1),a.length<=5)return L(!0);L(!1);var i={name:r.split("@")[0],email:r,password:a};e((0,g.a$)(i))},noValidate:!0,sx:{mt:1},children:[(0,j.jsx)(l.Z,{id:"email",name:"email",type:"email",label:"Email Address",placeholder:"example.something@gmail.com",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,error:!(!S&&!n),helperText:S&&(0,j.jsx)("span",{children:"Invalid email. Please try again "})}),(0,j.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!!I,inputProps:{pattern:/^\S+@\S+\.\S+$/},helperText:"Must be at least 6 characters long",autoComplete:"current-password"}),n&&(0,j.jsx)("div",{style:{marginTop:10},children:(0,j.jsx)("p",{style:{margin:0,color:"red"},children:"This email is already registered"})}),(0,j.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},style:(0,r.Z)({},Z),className:x,onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:"Sign Up"})]}),(0,j.jsx)(m.Z,{href:"/phonebook/login",variant:"body2",style:{textDecoration:"none"},children:(0,j.jsxs)("p",{className:f,children:[(0,j.jsx)("span",{children:"Have already an account?"}),(0,j.jsx)("span",{style:{marginLeft:5},children:"Login"})]})})]})})}var b=function(){return(0,j.jsx)(y,{})}}}]);
//# sourceMappingURL=285.211a650b.chunk.js.map