/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawer = querySelector('.navdrawer');
  var body = document.body;
  var pagebarElement = querySelector('.page-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    pagebarElement.classList.remove('open');
    navdrawer.classList.remove('open');
  }

  function toggleMenu() {
    var isOpen = document.body.classList.contains('open');
    if (isOpen) {
      document.body.classList.remove('open');
      pagebarElement.classList.remove('open');
      navdrawer.classList.remove('open');
    } else {
      document.body.classList.add('open');
      pagebarElement.classList.add('open');
      navdrawer.classList.add('open');
    }
    
    // body.classList.toggle('open');
    // pagebarElement.classList.toggle('open');
    // navdrawerContainer.classList.toggle('open');
    // navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
