// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import '../../Styles/main-keyframes.css'
import { WebLink, Icon } from '../../Styles/Components'
// ICONS
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationArrow);

const SocialMediaElement = styled.img`
	display: block;
	width: 70px;
	height: 70px;
	margin: 0 10px;
	border-radius: 15px;
	transition: opacity 0.1s ease;
	:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`

const Preview = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: #000;
	animation: scale 0.2s ease;
	${props =>
		props.preview &&
		css`
			display: block;
		`
	}
`

const PreviewImage = styled.img`
	position: relative;
	display: flex;
	justify-content: center;
	align-content: center;
	width: 100vw;
	max-width: 400px;
	padding-top: 10vh;
	margin: 0 auto;
	@media(max-height: 600px) {
		width: 70vh;
		max-width: 100vw;
	}
	@media(min-width: 1300px) {
		max-width: 500px;
	}
`

class SocialMediaItem extends Component {
	constructor(props) {
		super(props);
		this.state = {preview: false, animation: false};
	}

	changePreview = () => {
		if (this.state.preview === false) {
			this.setState({preview: true});
		}
		else {
			this.setState({preview: false});
		}

	}

	render() {
		return (
			<>
				<SocialMediaElement onClick={this.changePreview} src={this.props.srcLogo} alt=""/>
				<Preview onClick={this.changePreview} preview={this.state.preview} animation={this.state.animation}>
					<PreviewImage src={this.props.srcDescription} alt=""/>
					<WebLink workMedia={true} to={this.props.link} content={<Icon icon={['fas', 'location-arrow']}/>} />
				</Preview>
			</>
		);
	}
}

export default SocialMediaItem