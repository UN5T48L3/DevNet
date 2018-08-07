const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle 2 ile 4 karakter arasında olmalıdır';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Bu alan zorunludur';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Bu alan zorunludur';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Bu alan zorunludur';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Geçerli bir URL giriniz';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Geçerli bir URL giriniz';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Geçerli bir URL giriniz';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Geçerli bir URL giriniz';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Geçerli bir URL giriniz';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Geçerli bir URL giriniz';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
