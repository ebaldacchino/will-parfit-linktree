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
			<IconContainer href='https://www.facebook.com/willparfittTM' target="_blank" facebook>
				<FontAwesomeIcon icon={faFacebookF} />
			</IconContainer>
			<IconContainer href='https://twitter.com/will_parfitt_' target="_blank" twitter>
				<FontAwesomeIcon icon={faTwitter} />
			</IconContainer>
			<IconContainer href='https://www.instagram.com/will_parfitt/' target="_blank" instagram>
				<FontAwesomeIcon icon={faInstagram} />
			</IconContainer>
			<IconContainer href='https://www.tiktok.com/@will_parfitt' target="_blank" tiktok>
				<FontAwesomeIcon icon={faTiktok} />
			</IconContainer>
		</NavbarContainer>
	);
};

export default Navbar;
