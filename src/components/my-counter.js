const template = `
  <style>
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>

  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>
`;

class MyCounter extends HTMLElement {
  constructor() {
    super();

    const elem = document.createElement("template");
    elem.innerHTML = template;

    this.count = 0;
    this.attachShadow({ mode: "open" }).appendChild(
      elem.content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.shadowRoot.getElementById("inc").onclick = () => this.inc();
    this.shadowRoot.getElementById("dec").onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById("count").innerHTML = count;
  }
}

customElements.define("my-counter", MyCounter);
