var noticeContainer = document.getElementById('notice-container');

var icons = {
	error: `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 19.6875V33.4688" stroke="#E23535" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.4824 7.87501H22.5176C22.2619 7.87412 22.0086 7.92365 21.7722 8.02077C21.5357 8.1179 21.3207 8.26071 21.1395 8.44103L8.44103 21.1395C8.26071 21.3207 8.1179 21.5357 8.02077 21.7722C7.92365 22.0086 7.87412 22.2619 7.87501 22.5176V40.4824C7.87412 40.7381 7.92365 40.9914 8.02077 41.2279C8.1179 41.4643 8.26071 41.6793 8.44103 41.8606L21.1395 54.559C21.3207 54.7393 21.5357 54.8821 21.7722 54.9792C22.0086 55.0764 22.2619 55.1259 22.5176 55.125H40.4824C40.7381 55.1259 40.9914 55.0764 41.2279 54.9792C41.4643 54.8821 41.6793 54.7393 41.8606 54.559L54.559 41.8606C54.7393 41.6793 54.8821 41.4643 54.9792 41.2279C55.0764 40.9914 55.1259 40.7381 55.125 40.4824V22.5176C55.1259 22.2619 55.0764 22.0086 54.9792 21.7722C54.8821 21.5357 54.7393 21.3207 54.559 21.1395L41.8606 8.44103C41.6793 8.26071 41.4643 8.1179 41.2279 8.02077C40.9914 7.92365 40.7381 7.87412 40.4824 7.87501V7.87501Z" stroke="#E23535" stroke-width="3" stroke-miterlimit="10"/>
<path d="M31.5 45.2812C33.131 45.2812 34.4531 43.9591 34.4531 42.3281C34.4531 40.6972 33.131 39.375 31.5 39.375C29.869 39.375 28.5469 40.6972 28.5469 42.3281C28.5469 43.9591 29.869 45.2812 31.5 45.2812Z" fill="#E23535"/>
</svg>
`,
	warning: `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 25.5938V35.4375" stroke="#FF7A00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.1039 9.84364L6.44764 47.2499C6.10264 47.8474 5.92072 48.5252 5.92011 49.2152C5.9195 49.9052 6.10022 50.5832 6.44416 51.1814C6.78811 51.7796 7.2832 52.2768 7.87985 52.6234C8.47649 52.97 9.15374 53.1537 9.84374 53.1561H53.1562C53.8462 53.1537 54.5235 52.97 55.1201 52.6234C55.7168 52.2768 56.2119 51.7796 56.5558 51.1814C56.8998 50.5832 57.0805 49.9052 57.0799 49.2152C57.0793 48.5252 56.8973 47.8474 56.5523 47.2499L34.8961 9.84364C34.5537 9.24531 34.0593 8.74806 33.4629 8.40223C32.8665 8.0564 32.1894 7.87427 31.5 7.87427C30.8106 7.87427 30.1335 8.0564 29.5371 8.40223C28.9407 8.74806 28.4463 9.24531 28.1039 9.84364V9.84364Z" stroke="#FF7A00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.5 47.25C33.131 47.25 34.4531 45.9278 34.4531 44.2969C34.4531 42.6659 33.131 41.3438 31.5 41.3438C29.869 41.3438 28.5469 42.6659 28.5469 44.2969C28.5469 45.9278 29.869 47.25 31.5 47.25Z" fill="#FF7A00"/>
</svg>
`,
	success: `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.3281 25.5938L27.8824 39.375L20.6719 32.4844" stroke="#0BA808" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.5 55.125C44.5477 55.125 55.125 44.5477 55.125 31.5C55.125 18.4523 44.5477 7.875 31.5 7.875C18.4523 7.875 7.875 18.4523 7.875 31.5C7.875 44.5477 18.4523 55.125 31.5 55.125Z" stroke="#0BA808" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	alert: `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 55.125C44.5477 55.125 55.125 44.5477 55.125 31.5C55.125 18.4523 44.5477 7.875 31.5 7.875C18.4523 7.875 7.875 18.4523 7.875 31.5C7.875 44.5477 18.4523 55.125 31.5 55.125Z" stroke="#2B5EE1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.5312 29.5312H31.5V43.3125H33.4688" stroke="#2B5EE1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.0078 23.625C32.6388 23.625 33.9609 22.3028 33.9609 20.6719C33.9609 19.0409 32.6388 17.7188 31.0078 17.7188C29.3768 17.7188 28.0547 19.0409 28.0547 20.6719C28.0547 22.3028 29.3768 23.625 31.0078 23.625Z" fill="#2B5EE1"/>
</svg>
`,
	close: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 14L14 50" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50 50L14 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
};

function buildElement(text, type) {
	var notification = document.createElement('div');
	var notificationText = document.createElement('p');
	var notificationIcon = document.createElement('div');
	notification.classList.add('notification');
	notificationIcon.classList.add('notification-icon');
	notificationText.classList.add('notification-text');
	notificationText.innerText = text
    if(icons[type] === undefined){
        console.error('Type argument (parameter 2 of the createNotice() function) is of an unaccepted value.')
        return
    }
    notificationIcon.innerHTML = icons[type];
	notification.appendChild(notificationIcon);
	notification.appendChild(notificationText);
	return notification;
}

function createNotice(text, type, duration) {
    var timeOut = duration || 3000
    var noticeType = type || "alert"
    if(timeOut === 'persisted'){
        createPersistedNotice(text, noticeType)
    }
    else if(typeof(timeOut) === 'number'){
        var newnotification = buildElement(text, noticeType);
        noticeContainer.appendChild(newnotification)
        setTimeout(() => {
            newnotification.classList.add('show');
        }, 10);
        setTimeout(() => {
            newnotification.classList.remove('show');
            setTimeout(() => {
                newnotification.remove();
            }, 300);
        }, timeOut);
    }
    else{
        console.error('Duration argument (parameter 3 of the createNotice() function) is of an unaccepted value. It should be a Number > or = 0 or a string of the value "persisted" for persisted notifications')
    }
}
function createPersistedNotice(text, type) {
	var newnotification = buildElement(text, type);
    var notificationClose = document.createElement('div')
    notificationClose.innerHTML = icons.close
	notificationClose.classList.add('notification-icon');
	notificationClose.classList.add('notification-close');
    newnotification.appendChild(notificationClose)
    noticeContainer.appendChild(newnotification)
	setTimeout(() => {
		newnotification.classList.add('show');
	}, 10);
    notificationClose.addEventListener("click", () => {
        newnotification.classList.remove('show');
		setTimeout(() => {
			newnotification.remove();
		}, 300);
    })
}
