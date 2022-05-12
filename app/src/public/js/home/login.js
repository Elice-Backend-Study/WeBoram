'use strict';

const $ = (selector) => document.querySelector(selector);

const id = $('#id'),
  psword = $('#psword'),
  loginBtn = $('button');

const login = () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };
};

loginBtn.addEventListener('click', login);
