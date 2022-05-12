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
  console.log(req);
  console.log(JSON.stringify(req));
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
};

loginBtn.addEventListener('click', login);
