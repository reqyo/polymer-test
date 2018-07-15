/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<iron-iconset-svg name="my-icons" size="24">
  <svg>
    <defs>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <g id="menu">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </g>


      <g id="landing-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-Landscape" transform="translate(-26.000000, -53.000000)" fill-rule="nonzero" fill="#F6C723">
            <g id="Logo" transform="translate(26.000000, 53.000000)">
                <path d="M10.0287531,8.12182675 C10.0015054,9.25381794 9.77916211,10.3366626 9.38624468,11.3198405 L30.3319223,11.3198405 C31.1291413,11.3198405 32.1090987,9.99310125 32.1090987,8.06397636 C32.1090987,6.1349501 31.1288229,4.80811218 30.3319223,4.80811218 L9.49473586,4.80811218 C9.87125807,5.82146629 10.0571167,6.94347775 10.0287531,8.12182675 Z M2.40405609,0 L30.3319223,0 C34.1538344,0 36.9172109,3.74032747 36.9172109,8.06397636 C36.9172109,12.3875702 34.1544861,16.1279527 30.3319223,16.1279527 L2.40405609,16.1279527 C-0.80135203,16.1279527 -0.80135203,11.3198405 2.40405609,11.3198405 C4.05064593,11.3198405 5.17495327,9.96203566 5.22203325,8.00612597 C5.26879543,6.06341899 4.2495039,4.80811218 2.40405609,4.80811218 C-0.80135203,4.80811218 -0.80135203,0 2.40405609,0 Z M9.49473586,22.6801595 C9.87125807,23.6935136 10.0571167,24.815525 10.0287531,25.993874 C10.0015054,27.1258652 9.77916211,28.2087099 9.38624468,29.1918878 L30.3319223,29.1918878 C31.1291413,29.1918878 32.1090987,27.8651485 32.1090987,25.9360236 C32.1090987,24.0069974 31.1288229,22.6801595 30.3319223,22.6801595 L9.49473586,22.6801595 Z M2.40405609,17.8720473 L30.3319223,17.8720473 C34.1538344,17.8720473 36.9172109,21.6123748 36.9172109,25.9360236 C36.9172109,30.2596175 34.1544861,34 30.3319223,34 L2.40405609,34 C-0.80135203,34 -0.80135203,29.1918878 2.40405609,29.1918878 C4.05064593,29.1918878 5.17495327,27.8340829 5.22203325,25.8781733 C5.26879543,23.9354663 4.2495039,22.6801595 2.40405609,22.6801595 C-0.80135203,22.6801595 -0.80135203,17.8720473 2.40405609,17.8720473 Z"/>
            </g>
        </g>
    </g>
  </g>

    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
