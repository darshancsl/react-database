export const formValidation = (data) => {
  const { username, email, tags, desc } = data;
  let errors = {};

  if (!username.match(/\w{3,17}/i)) {
    errors.username = "Please enter username";
  }

  if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i)) {
    errors.email = "Please enter valid email";
  }

  if (!tags.length) {
    errors.tags = "Please select a tag";
  }

  if (!desc.length > 10) {
    errors.desc = "Please enter description";
  }

  return errors;
};