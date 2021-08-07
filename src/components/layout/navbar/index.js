import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faTiktok,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { IconContainer, NavbarContainer } from './styles';

const Navbar = () => {
	return (
		<NavbarContainer>
			<IconContainer
				href='https://www.facebook.com/willparfittTM'
				rel='noopener'
				target='_blank'
				role='button'
				aria-label="Facebook"
				facebook>
				<FontAwesomeIcon icon={faFacebookF} />
			</IconContainer>
			<IconContainer
				href='https://twitter.com/will_parfitt_'
				rel='noopener'
				target='_blank'
				role='button'
				aria-label="Twitter"
				twitter>
				<FontAwesomeIcon icon={faTwitter} />
			</IconContainer>
			<IconContainer
				href='https://www.instagram.com/will_parfitt/'
				rel='noopener'
				target='_blank'
				role='button'
				aria-label="Instagram"
				instagram>
				<FontAwesomeIcon icon={faInstagram} />
			</IconContainer>
			<IconContainer
				href='https://www.tiktok.com/@will_parfitt'
				rel='noopener'
				target='_blank'
				role='button'
				aria-label="TikTok"
				tiktok>
				<FontAwesomeIcon icon={faTiktok} />
			</IconContainer>
		</NavbarContainer>
	);
};

export default Navbar;
