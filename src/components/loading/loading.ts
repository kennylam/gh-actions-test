/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import { LOADING_TYPE } from './defs';
import getLoadingIcon from './loading-icon';
import styles from './loading.scss';

const { prefix } = settings;

/**
 * Spinner indicating loading state.
 * @element bx-loading
 */
@customElement(`${prefix}-loading`)
class BXLoading extends LitElement {
  /**
   * The assistive text for the spinner icon.
   */
  @property({ attribute: 'assistive-text' })
  assistiveText = 'Loading';

  /**
   * Spinner type.
   */
  @property()
  type = LOADING_TYPE.REGULAR;

  /**
   * `true` if spinner should stop.
   */
  @property({ type: Boolean, reflect: true })
  inactive = false;

  render() {
    const { inactive, assistiveText, type } = this;
    const innerClasses = classMap({
      [`${prefix}--loading`]: true,
      [`${prefix}--loading--stop`]: inactive,
    });
    const icon = getLoadingIcon({ assistiveText, type });
    return type !== LOADING_TYPE.OVERLAY ? icon : html` <div class="${innerClasses}">${icon}</div> `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export { LOADING_TYPE };

export default BXLoading;