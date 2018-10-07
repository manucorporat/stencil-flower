/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    constructor() {
        this.state = 0;
        this.nu = 50;
    }
    componentDidLoad() {
        setTimeout(() => this.state = 1, 500);
        setInterval(() => this.state++, 7000);
    }
    hostData() {
        return {
            style: {
                // '--border-color': `${Math.random() < 0.5 ? 'transparent' : 'black'}`,
                '--state': `${this.state * 0.1}`,
            },
            class: {
                'pride': window.location.hash.includes('pride')
            }
        };
    }
    render() {
        return Array.from({ length: this.nu }, (_, i) => (h("div", { class: {
                'square': true,
                'odd': (i % 2) === 0
            }, style: { '--index': `${i + 1}` } }))).reverse();
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
    static get style() { return ":host {\n  display: grid;\n\n  -webkit-box-align: center;\n\n  -ms-flex-align: center;\n\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  justify-items: center;\n  --rotation: 135deg;\n  --rotation: 225deg;\n  --size-step: 10px;\n  --odd-color-step: 5;\n  --even-color-step: 5;\n\n  --center: 12;\n\n  height: 100vh;\n  width: 100vw;\n\n  contain: strict;\n}\n\n.square {\n  --size: calc(40px + var(--index) * var(--size-step));\n\n  display: block;\n  width: var(--size);\n  height: var(--size);\n  -webkit-transform: rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));\n  transform: rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));\n  -webkit-transition-property: border-color, -webkit-transform;\n  transition-property: border-color, -webkit-transform;\n  transition-property: transform, border-color;\n  transition-property: transform, border-color, -webkit-transform;\n  -webkit-transition-duration: 5s;\n  transition-duration: 5s;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  grid-area: 1 / 1;\n  background: white;\n  border-width: 2px;\n  border-style: solid;\n  border-color: black;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  will-change: transform, border-color;\n\n  contain: strict;\n}\n\n.square.odd {\n  --luminance: calc(var(--index) * var(--odd-color-step));\n  background: rgb(var(--luminance), var(--luminance), var(--luminance));\n}\n\n:host(.pride) .square:nth-child(12n + 1) {\n  background: #E70000;\n}\n:host(.pride) .square:nth-child(12n + 3) {\n  background: #FF8C00;\n}\n:host(.pride) .square:nth-child(12n + 5) {\n  background: #FFEF00;\n}\n:host(.pride) .square:nth-child(12n + 7) {\n  background: #00811F;\n}\n:host(.pride) .square:nth-child(12n + 9) {\n  background: #0044FF;\n}\n:host(.pride) .square:nth-child(12n + 11) {\n  background: #760089;\n}"; }
}

export { AppHome };
