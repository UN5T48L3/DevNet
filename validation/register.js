const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'İsim 2 ile 30 karakter arasında olmalıdır';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'İsim girmelisiniz';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email girmelisiniz';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Girilen mail adresi geçerli değil';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Şifre girmelisiniz';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Şifre en az 6 karakter olmalı';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Şifreni doğrula';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Girilen şifreler eşleşmiyor';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
