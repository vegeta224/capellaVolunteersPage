/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// recipientNumber holds the value of selected number of recipients, to be used in multiple functions below
let recipientNumber = document.getElementById('volunteersInput')
// array to hold the names of the recipients
let volunteersNames = [];

const generateInvitation = function() {
    let receiverName1 = document.getElementById('recipientNameInput').value;
    let volunteersNames = [];
    // for loop adds names to the volunteersNames array
    for (let i = 1; i <= recipientNumber.value; i++) {
      if (i === 1) {
        volunteersNames.push(document.getElementById('recipientNameInput').value)
      } else {
        volunteersNames.push(document.getElementById(`recipientNameInput${i}`).value)
      }
    }
    // lines 17-20 create variables for the non-recipient data
    let organization = document.getElementById('organizationNameInput').value;
    let eventDate = document.getElementById('eventDateInput').value;
    let websiteURL = document.getElementById('websiteURLInput').value;
    let hostName = document.getElementById('hostNameInput').value;
    // lines 22-26 rewrite the first invite placeholders to reflect accurate data
    document.getElementById('recipientName1').innerHTML = receiverName1; 
    document.getElementById('organizationName').innerHTML = organization;
    document.getElementById('eventDate').innerHTML = eventDate;
    document.getElementById('websiteURL').innerHTML = websiteURL;
    document.getElementById('hostName').innerHTML = hostName;
    // triggers displayInvites function
    displayInvites()
  };  

  const countVolunteers = function(event) {
    // loops through the recipient number submitted creating a new input field for each individual recipient
    for (let i = 1; i < recipientNumber.value; i++) {
      const recipientsDiv = document.getElementById('recipients')
      const inputNeeded = document.getElementById('recipientNameInput')
      const clone = inputNeeded.cloneNode(true)
      clone.id = `recipientNameInput${i + 1}`
      recipientsDiv.appendChild(clone)
    }
  }

  const displayInvites = function() {
    // this for loop clones a new invitation for each extra recipient
    for (let i = 1; i <= recipientNumber.value; i++) {
      const inviteHolder = document.getElementById('placeholderContent')
      const invite = document.getElementById('invitePlaceholder')
      const clone = inviteHolder.cloneNode(true)
      const changeSpan = clone.firstChild.nextSibling.nextSibling.nextSibling;
      // conditional statement ensures the exact number of invites matches the recipientNumber
      if (i === 1) {
        invite.appendChild(clone)
        changeSpan.id = `recipientName${i + 1}`
        document.getElementById(`recipientName${i}`).innerHTML = document.getElementById('recipientNameInput').value
      } else if (i < recipientNumber.value && i !== 1) {
        invite.appendChild(clone)
        changeSpan.id = `recipientName${i + 1}`
        document.getElementById(`recipientName${i}`).innerHTML = document.getElementById(`recipientNameInput${i}`).value
      } else {
        changeSpan.id = `recipientName${i + 1}`
        document.getElementById(`recipientName${i}`).innerHTML = document.getElementById(`recipientNameInput${i}`).value
      }



      // if (i < recipientNumber.value) {
      //   invite.appendChild(clone)
      //   changeSpan.id = `recipientName${i + 1}`
      //   document.getElementById(`recipientName${i}`).innerHTML = document.getElementById(`recipientNameInput${i}`).value
      // } else {
      //   changeSpan.id = `recipientName${i + 1}`
      //   document.getElementById(`recipientName${i}`).innerHTML = document.getElementById(`recipientNameInput${i}`).value
      // }
    }
  }