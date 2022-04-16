import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pixo-stencil-button',
  shadow: true,
  styleUrl: "pixo-stencil-button.scss"
})
export class PixoStencilButton {

  render() {
    return (
      <Host>
        <button class="primary-button">

        <slot></slot>
        </button>

      </Host>
    );
  }

}
