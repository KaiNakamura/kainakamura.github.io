import React from 'react';
import './Cards.css';

export default class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 0
		};

		this.prevSlide = this.prevSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
	}

	prevSlide() {
		this.setState((state) => {
			if (state.slide === 0) {
				return {
					slide: this.props.children.length - 1
				};
			}
			return {
				slide: state.slide - 1
			};
		});
	}

	nextSlide() {
		this.setState((state) => {
			if (state.slide === this.props.children.length - 1) {
				return {
					slide: 0
				};
			}
			return {
				slide: state.slide + 1
			};
		});
	}

	render() {
		if (this.props.slideshow) {
			return (
				<div className='Slideshow'>
					<button className='btn prevBtn' onClick={this.prevSlide}></button>
						{this.props.children.at(this.state.slide)}
					<button className='btn nextBtn' onClick={this.nextSlide}></button>
				</div>
			);
		}

		return (
			<div className='Cards'>
				{this.props.children}
			</div>
		);
	}
}
