const displayError = (message) => {
  const messagecontainer = document.getElementById('error-message');
  messagecontainer.innerText = message;
  setTimeout(() => {
    messagecontainer.innerText = '';
  }, 5000);
};

export default displayError;
