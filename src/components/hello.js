

class HelloComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    // const style = ``
    const hello = document.createElement("div");
    hello.innerText = "Hello";
    shadow.appendChild(hello);
  }
}


export default HelloComponent;
