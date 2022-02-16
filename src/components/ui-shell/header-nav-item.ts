/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import settings from 'carbon-components/es/globals/js/settings';
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, customElement, LitElement } from 'lit-element';
import FocusMixin from '../../globals/mixins/focus';
import styles from './header.scss';

const { prefix } = settings;

/**
 * Header nav item.
 * @element bx-header-nav-item
 * @csspart link The link.
 * @csspart title The title.
 */
@customElement(`${prefix}-header-nav-item`)
class BXHeaderNavItem extends FocusMixin(LitElement) {
  /**
   * Link `href`.
   */
  @property()
  href!: string;

  /**
   * The title.
   */
  @property()
  title!: string;

  /**
   * As child of <ul>, this element must have role of listitem
   */
  @property({ reflect: true })
  role: string = 'listitem';

  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <= 537,
    });
  }

  render() {
    const { href, title } = this;
    return html`
      <a part="link" class="${prefix}--header__menu-item" tabindex="0" href="${ifDefined(href)}">
        <span part="title" class="${prefix}--text-truncate--end"><slot>${title}</slot></span>
      </a>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXHeaderNavItem;