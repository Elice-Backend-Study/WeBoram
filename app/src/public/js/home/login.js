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
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log);
};

loginBtn.addEventListener('click', login);
