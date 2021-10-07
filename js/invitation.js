/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const generateInvitation = function() {
    //lines 5 through 9 create new variables that grab that user input on each input field within the form
    let receiverName = document.getElementById('recipientNameInput').value;
    let organization = document.getElementById('organizationNameInput').value;
    let eventDate = document.getElementById('eventDateInput').value;
    let websiteURL = document.getElementById('websiteURLInput').value;
    let hostName = document.getElementById('hostNameInput').value;
    //lines 11 through 15 rewrite the inner HTML stored in the appropriate span tags
    document.getElementById('recipientName').innerHTML = receiverName; 
    document.getElementById('organizationName').innerHTML = organization;
    document.getElementById('eventDate').innerHTML = eventDate;
    document.getElementById('websiteURL').innerHTML = websiteURL;
    document.getElementById('hostName').innerHTML = hostName;
  };  