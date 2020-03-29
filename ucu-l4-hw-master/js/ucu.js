// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long
//    email format is correct
//    name has 0 or 2 whitespaces benween words
//    name length is 1 or more chars
//    phone length is 12 or more digits
//    phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion
//    message is 10 or more characters.
//    message must not iclude bad language: ugly, dumm, stupid, pig, ignorant
// 2. Validate each input on the fly using onchange event
// 3. Define re-usable validators: length, format,  
function validateMe(event) {
  event.preventDefault();

  const emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
  emailErrorNode.innerHTML = '';

  const nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
  nameErrorNode.innerHTML = '';

  const phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block');
  phoneErrorNode.innerHTML = '';

  const mesNode = event.target.elements['message'];
  const mesErrorNode = mesNode.parentNode.querySelector('p.help-block');
  mesErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");

  let mesErrors = document.createElement('ul');
  mesErrors.setAttribute("role", "alert");
  
  if ((emailNode.value.length < 5 ) || (emailNode.value.length > 50))  {
    let li = document.createElement('li');
    li.innerText = 'Email is too short';
    emailErrors.appendChild(li)
  }

  if (!emailNode.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    let li = document.createElement('li');
    li.innerText = 'Email format is incorrect';
    emailErrors.appendChild(li)
  }

  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)
  }

  if (nameNode.value.length < 1){
    let li = document.createElement('li');
    li.innerText = 'Name is to short';
    nameErrors.appendChild(li);
  }

  if (!nameNode.value.match(/\w+\s{2}?\w+|\w+/)) {
    let li = document.createElement('li');
    li.innerText = 'Name is unpropriate';
    nameErrors.appendChild(li);
  }

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors);
  }

  if (phoneNode.value.length < 12) {
    let li = document.createElement('li');
    li.innerText = 'Phone number is to short';
    phoneErrors.appendChild(li);
  }

  if ( !phoneNode.value.match(/^[\+0][0-9]{3}[\(]?[0-9]{2}[\)]?[\s\-][0-9]{3}[\s\-][0-9]{3}[\s\-][0-9]{2}/)){
    let li = document.createElement('li');
    li.innerText = 'Phone number is uncorrect';
    phoneErrors.appendChild(li);
  }

  if (phoneErrors.childElementCount > 0) { 
    phoneErrorNode.appendChild(phoneErrors);
  }
  
  if (mesNode.value.length < 10) {
    let li = document.createElement('li');
    li.innerText = 'Message is to short';
    mesErrors.appendChild(li);
  }

  if (mesNode.value.match(/ugly|dumm|stupid|pig|ignorant/)) {
    let li = document.createElement('li');
    li.innerText = 'Message contains bad words';
    mesErrors.appendChild(li);
  }

  if (mesErrors.childElementCount > 0) { 
    mesErrorNode.appendChild(mesErrors);
  }

  return false;
}
