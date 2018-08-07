const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 3, max: 280 })) {
        errors.text = 'Gönderi en az 3 en fazla 280 karakter olabilir';
    }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Bu alan boş bırakılamaz';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
