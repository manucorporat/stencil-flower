import { Component, State, Prop } from '@stencil/core';


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
    setInterval(() => this.state++, 13000);
  }

  hostData() {
    return {
      style: {'--state': `${this.state * 0.1}` }
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
