import castleAnimation from "./src/index.js";
import "./index.css";
const main = () => {
  // 等待 DOMContentLoaded 事件，确保 DOM 元素已加载

  document.addEventListener("DOMContentLoaded", () => {
    castleAnimation?.();
  });
};

main();

export default main;
