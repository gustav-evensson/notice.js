require('./style/notice.css');

module.exports = class Notice {
	constructor({ type, position, theme, animation }) {
		(this.type = type || 'standard'), (this.position = position || 'bottom-left'), (this.theme = theme || 'light'), (this.animation = animation || 'slide-right');

		const noticeContainer = document.createElement('div');
		noticeContainer.setAttribute('id', 'notice-container');
		noticeContainer.classList.add(this.position);
		if(this.type === 'standard' || this.type === 'glass'){
			noticeContainer.classList.add(this.theme);
		}
		noticeContainer.classList.add(this.type)
		noticeContainer.classList.add(this.animation);
		document.body.appendChild(noticeContainer);
	}
	createNotice(text, type, duration) {
		const noticeContainer = document.querySelector('#notice-container');
		const icons = {
			error: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10.625V18.0625" stroke="#D64747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.8476 4.25001H12.1523C12.0144 4.24952 11.8777 4.27625 11.75 4.32867C11.6224 4.38109 11.5064 4.45816 11.4086 4.55548L4.55546 11.4086C4.45814 11.5064 4.38107 11.6224 4.32866 11.7501C4.27624 11.8777 4.24951 12.0144 4.24999 12.1524V21.8477C4.24951 21.9856 4.27624 22.1223 4.32866 22.25C4.38107 22.3776 4.45814 22.4936 4.55546 22.5914L11.4086 29.4445C11.5064 29.5419 11.6224 29.6189 11.75 29.6713C11.8777 29.7238 12.0144 29.7505 12.1523 29.75H21.8476C21.9856 29.7505 22.1223 29.7238 22.2499 29.6713C22.3776 29.6189 22.4936 29.5419 22.5914 29.4445L29.4445 22.5914C29.5418 22.4936 29.6189 22.3776 29.6713 22.25C29.7237 22.1223 29.7505 21.9856 29.75 21.8477V12.1524C29.7505 12.0144 29.7237 11.8777 29.6713 11.7501C29.6189 11.6224 29.5418 11.5064 29.4445 11.4086L22.5914 4.55548C22.4936 4.45816 22.3776 4.38109 22.2499 4.32867C22.1223 4.27625 21.9856 4.24952 21.8476 4.25001V4.25001Z" stroke="#D64747" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M17 24.4375C17.8802 24.4375 18.5938 23.724 18.5938 22.8438C18.5938 21.9635 17.8802 21.25 17 21.25C16.1198 21.25 15.4062 21.9635 15.4062 22.8438C15.4062 23.724 16.1198 24.4375 17 24.4375Z" class="fill" fill="#D64747"/>
            </svg>
            `,
			warning: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.8125V19.125" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.1672 5.3125L3.47968 25.5C3.29349 25.8225 3.19531 26.1883 3.19498 26.5606C3.19465 26.933 3.29218 27.2989 3.4778 27.6218C3.66342 27.9446 3.93062 28.213 4.25262 28.4C4.57462 28.587 4.94011 28.6862 5.31249 28.6875H28.6875C29.0599 28.6862 29.4254 28.587 29.7474 28.4C30.0694 28.213 30.3366 27.9446 30.5222 27.6218C30.7078 27.2989 30.8053 26.933 30.805 26.5606C30.8047 26.1883 30.7065 25.8225 30.5203 25.5L18.8328 5.3125C18.648 4.98959 18.3812 4.72123 18.0593 4.5346C17.7375 4.34796 17.372 4.24966 17 4.24966C16.6279 4.24966 16.2625 4.34796 15.9407 4.5346C15.6188 4.72123 15.352 4.98959 15.1672 5.3125V5.3125Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 25.5C17.8802 25.5 18.5938 24.7865 18.5938 23.9062C18.5938 23.026 17.8802 22.3125 17 22.3125C16.1198 22.3125 15.4062 23.026 15.4062 23.9062C15.4062 24.7865 16.1198 25.5 17 25.5Z" class="fill" fill="#D27722"/>
            </svg>
            `,
			success: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8438 13.8125L15.0477 21.25L11.1562 17.5312" stroke="#0BA808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 29.75C24.0416 29.75 29.75 24.0416 29.75 17C29.75 9.95837 24.0416 4.25 17 4.25C9.95837 4.25 4.25 9.95837 4.25 17C4.25 24.0416 9.95837 29.75 17 29.75Z" stroke="#0BA808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
			alert: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 29.75C24.0416 29.75 29.75 24.0416 29.75 17C29.75 9.95837 24.0416 4.25 17 4.25C9.95837 4.25 4.25 9.95837 4.25 17C4.25 24.0416 9.95837 29.75 17 29.75Z" stroke="#5274CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9375 15.9375H17V23.375H18.0625" stroke="#5274CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.7344 12.75C17.6146 12.75 18.3281 12.0365 18.3281 11.1562C18.3281 10.276 17.6146 9.5625 16.7344 9.5625C15.8542 9.5625 15.1406 10.276 15.1406 11.1562C15.1406 12.0365 15.8542 12.75 16.7344 12.75Z" class="fill" fill="#5274CA"/>
            </svg>
            `,
			close: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5625 7.4375L7.4375 26.5625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.5625 26.5625L7.4375 7.4375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
		};
		function buildElement(text, type) {
			var notification = document.createElement('div');
			var notificationText = document.createElement('p');
			var notificationIcon = document.createElement('div');
			notification.classList.add('notification');
			notification.classList.add(`${type}`);
			notificationIcon.classList.add('notification-icon');
			notificationIcon.classList.add(`${type}`);
			notificationText.classList.add('notification-text');
			notificationText.innerText = text;
			if (icons[type] === undefined) {
				console.error('Type argument (parameter 2 of the createNotice() function) is of an unaccepted value.');
				return;
			}
			notificationIcon.innerHTML = icons[type];
			notification.appendChild(notificationIcon);
			notification.appendChild(notificationText);
			return notification;
		}
		function createPersistedNotice(text, type) {
			var newnotification = buildElement(text, type);
			var notificationClose = document.createElement('div');
			notificationClose.innerHTML = icons.close;
			notificationClose.classList.add('notification-close-icon');
			newnotification.appendChild(notificationClose);
			noticeContainer.appendChild(newnotification);
			setTimeout(() => {
				newnotification.classList.add('show');
			}, 10);
			notificationClose.addEventListener('click', () => {
				newnotification.classList.remove('show');
				setTimeout(() => {
					newnotification.remove();
				}, 300);
			});
		}
		var timeOut = duration || 3000;
		var noticeType = type || 'alert';
		if (timeOut === 'persisted') {
			createPersistedNotice(text, noticeType);
		} else if (typeof timeOut === 'number') {
			var newnotification = buildElement(text, noticeType);
			noticeContainer.appendChild(newnotification);
			setTimeout(() => {
				newnotification.classList.add('show');
			}, 10);
			setTimeout(() => {
				newnotification.classList.remove('show');
				setTimeout(() => {
					newnotification.remove();
				}, 300);
			}, timeOut);
		} else {
			console.error(
				'Duration argument (parameter 3 of the createNotice() function) is of an unaccepted value. It should be a Number > or = 0 or a string of the value "persisted" for persisted notifications'
			);
		}
	}
}
