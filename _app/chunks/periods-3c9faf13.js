import{f as m}from"./utils-1595b72e.js";import{r as f,t as u,a as D}from"./index-14ac584d.js";function p(r,n){f(2,arguments);var t=u(r),e=D(n);return isNaN(e)?new Date(NaN):(e&&t.setDate(t.getDate()+e),t)}new Date().getTimezoneOffset();function g(r,n){const[t,e,d]=n.split("/"),[s,o]=e.split("-"),a=r.dates[t-1],i=o>s?a:m(p(new Date(a),1),"yyyy-MM-dd");return{date:a,name:d,period:{start:new Date(`${a}T${s}:00.000+02:00`),end:new Date(`${i}T${o}:00.000+02:00`)}}}export{g as p};