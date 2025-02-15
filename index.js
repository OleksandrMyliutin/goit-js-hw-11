import{a as d,S as p,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=d.create({baseURL:"https://pixabay.com/api/",params:{key:"48847177-927ba4e40b84ac1d7e4adedbb",image_type:"photo",orientation:"horizontal",safesearch:!0}});function m(r){return f.get("",{params:{q:r}}).then(i=>i.data.hits)}function h(r){const{largeImageURL:i,webformatURL:o,tags:a,likes:e,views:t,comments:s,downloads:u}=r;return`<li>
            <div class="card">
              <a class="gallery-link" href="${i}">
                  <img
                    class="card-image"
                    src="${o}"
                    alt="${a}"
                  />
              </a>
              <div class="card-content">
                <ul>
                  <li><h5>Likes</h5></li>
                  <li><p>${e}</p></li>
                </ul>
                <ul>
                  <li><h5>Views</h5></li>
                  <li><p>${t}</p></li>
                </ul>
                <ul>
                  <li><h5>Comments</h5></li>
                  <li><p>${s}</p></li>
                </ul>
                <ul>
                  <li><h5>Downloads</h5></li>
                  <li><p>${u}</p></li>
                </ul>
              </div>
            </div>
          </li>`}function g(r){return r.map(h).join("")}const l={cardList:document.querySelector(".card-list"),form:document.querySelector(".form-style"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",b);let y=new p(".card-list a",{captionsData:"alt",captionDelay:250}),c;function b(r){r.preventDefault();const i=r.currentTarget.elements.query.value.trim();if(!i){n.warning({title:"Warning",message:"⚠️ Please enter a search query!",position:"topRight"});return}l.loader.style.display="block",c&&clearInterval(c),c=setTimeout(()=>{m(i).then(o=>{if(!o.length){n.info({title:"Not found",message:"😢 Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.cardList.innerHTML=g(o),y.refresh()}).catch(o=>{n.error({title:"Error",message:"🚨 Sorry, something went wrong. Please try again!",position:"topRight"})}).finally(()=>{l.loader.style.display="none"})},3e3),r.currentTarget.reset()}
//# sourceMappingURL=index.js.map
