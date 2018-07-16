/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
          display: block;
        margin-right: auto;
        margin-left: auto;
        padding: 24px;
        width: 80%;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .bookname{
        color: #8868F0;
      }

      .titleContents{
        width: 65%;
        float: right;
      }

      span {
        font-size: 1.5vmin;

      }

      .imageAuthor{
        width: 45%;
      }


      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 18px;
        
        display: block;
      }


      h2 {
      font-size: 18px;
      display: block;
      margin: 0;
      }


      h3 {
        font-size: 18px;
        display: inline-block;
        margin: 0;
        }

      table {
        display: block;
        float: left;
        white-space: pre;
        overflow: auto;
        border-collapse: collapse;
        width: auto;
        height: auto;
        
        
      }

      tr{
        white-space: normal;
        width: inherit;
        overflow: auto;
      }

      th{
        padding-right: 10px;
        padding-left: 10px;
      }

      td{
        padding-right: 10px;
        padding-left: 10px;
        white-space: normal;
        width: inherit;
        overflow: auto;

      }

      @media only screen and (max-width: 932px){

        .card{
          width: 90%
        }

      }

      @media only screen and (max-width: 800px){
        .imageAuthor{
          width: 100%;
        }

        span {
          font-size: 2vmin;
  
        }

        td{
          width: 20px;
          padding-right: 2px;
          padding-left: 2px;
        }


      th{
        padding-right: 10px;
        padding-left: 10px;
      }



        .titleContents{
          width: 100%;
          float: left;
          margin-bottom: 20px;
        }

      }


      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
