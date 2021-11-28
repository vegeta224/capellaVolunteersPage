function setCookie(event) {
    event.preventDefault();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let checkbox = [];
    var checkboxes = document.querySelectorAll('input[name="interests"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        checkbox.push(checkboxes[i].value)
    }
    params.interests = checkbox || ''
    params.newsletter = document.querySelector('input[name="newsLetter"]').value || '';
    params.comments = document.getElementById('comments').value || '';
    params.referrer = document.getElementById('referral').value || '';
    document.cookie = JSON.stringify(params);
    window.open('confirm.html', '_self', false);
}