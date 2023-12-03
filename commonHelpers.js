import{a as p}from"./assets/vendor-32bc2129.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();p.defaults.headers.common["x-api-key"]="live_LwdZPWSBd249BTZ1XEE1Jnlhm43lImqBynqyOmF4YHvizwR0HqfldyOb8SwdBv5N";async function u(){return await p.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function m(e){return await p.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(r=>r.data)}const s=document.querySelector(".breed-select"),l=document.querySelector(".loader"),d=document.querySelector(".error"),i=document.querySelector(".cat-info");s.addEventListener("change",y);async function h(){try{s.classList.add("hidden"),l.classList.remove("hidden");const e=await u();return console.log("getBreeds: ",e),e&&s.classList.remove("hidden"),e}catch(e){console.log(e),d.classList.remove("hidden")}finally{l.classList.add("hidden")}}h().then(e=>e.map(r=>{const n=`<option value=${r.id} key=${r.id}>${r.name}</option>`;s.insertAdjacentHTML("beforeend",n)}).join("")).catch(e=>{console.log(e),d.classList.remove("hidden")});async function f(e){try{s.classList.add("hidden"),i.classList.add("hidden"),d.classList.add("hidden"),l.classList.remove("hidden");const r=await m(e);return r&&(s.classList.remove("hidden"),i.classList.remove("hidden")),r}catch(r){console.log(r),d.classList.remove("hidden")}finally{l.classList.add("hidden")}}function y(e){e.preventDefault();const r=e.target.value;f(r).then(n=>{var t,o;i.innerHTML="",console.log("Cat by breed: ",n[0]);const a=`<div style="display: flex; flex-direction: row">
        <div
          style="
            margin-top: 30px;
            margin-right: 30px;
            width: 350px;
            background-color: grey;
            border-radius: 4px 4px 4px 4px;
            box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
              0px 1px 1px 0px rgba(46, 47, 66, 0.16),
              0px 1px 6px 0px rgba(46, 47, 66, 0.08);
              overflow: hidden;
          "
        >
          <img
            src=${n[0].url}
            alt=${n[0].breeds[0].name}
            style="
              display: block;
              width: 100%;
            "
          />
        </div>
        <div style="display: block; margin-top: 30px">
          <h1 style="font-size: x-large; font-weight: 700; margin-bottom: 16px">
            ${n[0].breeds[0].name}
          </h1>
          <p style="margin-bottom: 12px">${n[0].breeds[0].description}</p>
          <p>
            <span style="font-weight: 700; padding-right: 8px">Temperament:</span>${(o=(t=n[0])==null?void 0:t.breeds[0])==null?void 0:o.temperament}
          </p>
        </div>
      </div>`;n&&i.classList.remove("hidden"),i.innerHTML=a}).catch(n=>{console.log(n),d.classList.remove("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
