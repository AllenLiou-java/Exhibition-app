import{D as o}from"./index-d614a8a0.js";const t=async e=>{try{return o.post("https://evening-hollows-08215-2bb8e1b9252d.herokuapp.com/api/v1/order/",e).data}catch(r){console.log(r)}},c=async e=>{try{return o.get(`https://evening-hollows-08215-2bb8e1b9252d.herokuapp.com/api/v1/order/user/${e}`)}catch(r){console.log(r)}};export{t as c,c as g};