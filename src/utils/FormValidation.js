export const RequierdValidation = (values) => {
  if (values.name == "") return {msg:"Name is Requierd", val:-1};
  if (values.email == "") return {msg:"Email is Requierd", val:-1}
  else if(!EmailValidator(values.email)) return {msg:"Email is not valid", val:-1}
  if (values.company == "") return {msg:"Company name is Requierd", val:-1};
  if (values.message == "") return {msg:"Message is Requierd", val:-1};
  return {msg:"", val:1}
};

export const EmailValidator = (email) => {
  const pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return pattern.test(email);
};
