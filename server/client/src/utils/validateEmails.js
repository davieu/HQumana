// http://emailregex.com/ ensures that email addresses were actually formatted as such
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//First, we're taking emails in as our argument
export default emails => {
  const invalidEmails = emails
  //Next we're splitting the array of emails by comma
    .split(',')
    //Using trim we're killing any spaces in the email
    .map(email => email.trim())
    //filter we're returning and invalid emails to a an array called invalidEmails
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};