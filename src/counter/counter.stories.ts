/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import 'lib/counter/register.js';
import { html } from 'lit';

export default {
  title: 'Stories/Counter',
  component: 'cda-counter',
};

export const basic = () => {
  return html`
    <cda-counter></cda-counter>
  `;
}
