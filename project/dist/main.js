(()=>{"use strict";!function(){const e=document.querySelector(".menu-icon");console.log(e);const s=document.querySelector(".menu-items");let t=!1;e.addEventListener("click",(()=>{!1===t?(t=!0,s.classList.remove("menu-items-hidden"),s.classList.add("menu-items-display")):!0===t&&(t=!1,s.classList.remove("menu-items-display"),s.classList.add("menu-items-hidden"))}))}()})();