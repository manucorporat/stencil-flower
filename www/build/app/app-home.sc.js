/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    constructor() {
        this.state = 0;
        this.nu = 50;
    }
    componentDidLoad() {
        setTimeout(() => this.state = 1, 500);
        setInterval(() => this.state++, 13000);
    }
    hostData() {
        return {
            style: { '--state': `${this.state * 0.1}` }
        };
    }
    render() {
        return Array.from({ length: this.nu }, (_, i) => (h("div", { class: "square", style: { '--index': `${i + 1}` } }))).reverse();
    }
    static get is() { return "app-home"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "nu": {
            "type": Number,
            "attr": "nu"
        },
        "state": {
            "state": true
        }
    }; }
    static get style() { return "\n[data-app-home-host] {\n  display: grid;\n\n  -webkit-box-align: center;\n\n  -ms-flex-align: center;\n\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  justify-items: center;\n  --rotation: 135deg;\n  \n  --odd-color-step: 5;\n  --even-color-step: 5;\n\n  --center: 12;\n\n  height: 100vh;\n  width: 100vw;\n\n  contain: strict;\n}\n\n.square[data-app-home] {\n  --size: calc(40px + var(--index) * 10px);\n\n  display: block;\n  width: var(--size);\n  height: var(--size);\n  -webkit-transform: rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));\n  transform: rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));\n  -webkit-transition: -webkit-transform 10s ease-in-out;\n  transition: -webkit-transform 10s ease-in-out;\n  transition: transform 10s ease-in-out;\n  transition: transform 10s ease-in-out, -webkit-transform 10s ease-in-out;\n  grid-area: 1 / 1;\n\n  will-change: transform;\n\n  contain: strict;\n}\n\n.square[data-app-home]:nth-child(odd) {\n  --luminance: calc(var(--index) * var(--odd-color-step));\n  background: rgb(var(--luminance), var(--luminance), var(--luminance));\n}\n\n.square[data-app-home]:nth-child(even) {\n  background: white;\n}\n"; }
}

export { AppHome };
