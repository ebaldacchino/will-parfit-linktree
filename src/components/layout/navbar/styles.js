import tw, { css, styled } from 'twin.macro';

export const IconContainer = styled.a`
	${tw`flex-1 flex justify-center items-center py-3 text-white mt-1 mx-0.5 cursor-pointer duration-200 rounded text-2xl duration-200`} 
	${(props) =>
		(props.facebook &&
			css`
				background-color: #2f519d;
				background: -webkit-linear-gradient(top, #2f519d, #1f3c84);
				&:hover {
					background-color: #2a488d;
					background: -webkit-linear-gradient(top, #2a488d, #1b3676);
				} 
			`) ||
		(props.twitter &&
			css`
				background-color: #01a8fe;
				background: -webkit-linear-gradient(top, #01a8fe, #0087ce);
				&:hover {
					background-color: #0097e4;
					background: -webkit-linear-gradient(top, #0097e4, #0079b9);
				} 
			`) ||
		(props.instagram &&
			css`
				background-color: #752cd4;
				background: -webkit-linear-gradient(top, #ff8e40, #e30175, #752cd4);
				&:hover {
					background: -webkit-linear-gradient(top, #e57f39, #cc0069, #6927be);
				} 
			`) ||
		(props.tiktok &&
			css`
				${tw`text-black bg-white hover:bg-gray-300`}
				& svg {
					filter: drop-shadow(0 -1px #24f6f0) drop-shadow(1px 2px #fe2d52);
				}
			`)}
`;

export const NavbarContainer = tw.div`flex mx-0.5`;
