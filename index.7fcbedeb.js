const UPDATES_PER_SECOND=30;document.addEventListener("DOMContentLoaded",(()=>{const e=$("#title"),t=$("#progress-bar"),r=$("#progress-percentage");setInterval((()=>{const{year:n,percentage:o}=getYearProgress();e.innerText=n,t.style.setProperty("width",`${o}%`),r.innerText=o.toFixed(10)}),1e3/30)}));const $=e=>document.querySelector(e);function getYearProgress(){const e=(new Date).getFullYear(),t=new Date(`${e}`),r=new Date(`${e+1}`);return{year:e,percentage:(Date.now()-t)/(r-t)*100}}