/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>


      <iron-ajax
    auto
    url="index.json"
    handle-as="json"
    on-response="handleResponse"
    last-response="{{response}}"></iron-ajax>

      <div class="card">
      

      <div class="titleContents">
      <h1 class="bookname">{{title}}</h1>
        <table>
        <tr>
        <thead style="text-align: center; margin-right: auto; margin-left: auto;">
        <th>First</th>
        <th>Number</th>
        <th>File</th>
        </tr>

        </thead>
        <tbody>
        <template is="dom-repeat" items="{{response.toc}}">

    <tr> <td>{{item.first}} </td>
    <td> {{item.num}} </td>
    <td> <span>{{item.file}}</span> </td></tr>

</template>
</tbody>
</table>
</div>
<div class="imageAuthor">
<iron-image style="" src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"> alt="{{title}}"</iron-image>
        <template is="dom-repeat" items="{{response.contributors}}">
        <h2>{{item}}</h2>
        </template>
        <h3>Year of Publication: {{date}}</h3>
</div>

      </div>
    `;
  }

  handleResponse(event, request) {
    var response = request.response;
    this.echo = JSON.stringify(response);
    this.set('title', response.title);
    this.set('date', response.date);
  }
}

window.customElements.define('my-view1', MyView1);
