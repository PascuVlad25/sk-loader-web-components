import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-loader-image',
  styleUrl: 'sk-loader-image.css',
  shadow: true,
})
export class SkLoaderImage {
  @Prop() animated: boolean = true;

  render() {
    return (
      <Host>
        <div class={`sk-image sk-loader ${this.animated ? 'animated' : ''}`}></div>
      </Host>
    );
  }

}
