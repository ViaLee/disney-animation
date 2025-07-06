import castleAnimation from "./src/index.js";

const main = () => {
  // 等待 DOMContentLoaded 事件，确保 DOM 元素已加载
  document.addEventListener("DOMContentLoaded", () => {
    castleAnimation?.();
  });
};

export default main;
