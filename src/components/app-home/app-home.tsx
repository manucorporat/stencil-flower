import { Component, State, Prop, h } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @State() state = 0;

  @Prop() nu = 50;

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
    }
  }

  render() {
    return Array.from({ length: this.nu }, (_, i) => (
      <div
        class={{
          'square': true,
          'odd': (i % 2) === 0
        }}
        style={{ '--index': `${i + 1}` }} />
    )).reverse();
  }
}
