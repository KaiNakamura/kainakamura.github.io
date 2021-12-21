import React from 'react';
import './CardAudio.css';

export default class CardAudio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			canPlay: false,
			playing: false,
			volumeControlsOpen: false,
			currentTime: 0,
			duration: 0,
			volume: 1,
			currentlyDragged: null
		};

		this.audioPlayerRef = React.createRef();
		this.progressSliderRef = React.createRef();
		this.volumeSliderRef = React.createRef();

		this.canPlay = this.canPlay.bind(this);
		this.ended = this.ended.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
		this.toggleVolumeControls = this.toggleVolumeControls.bind(this);
		this.updateTime = this.updateTime.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
	}

	canPlay() {
		this.setState({
			canPlay: true,
			duration: this.audioPlayerRef.current.duration
		});
	}

	ended() {
		this.setState({
			playing: false,
			currentTime: 0
		});
	}

	togglePlay() {
		if (this.state.playing) {
			this.audioPlayerRef.current.pause();
		} else {
			this.audioPlayerRef.current.play();
		}

		this.setState((state) => {
			return {
				playing: !state.playing
			};
		});
	}

	toggleVolumeControls() {
		this.setState((state) => {
			return {
				volumeControlsOpen: !state.volumeControlsOpen
			};
		});
	}

	updateTime() {
		this.setState({
			currentTime: this.audioPlayerRef.current.currentTime
		});
	}

	updateVolume() {
		this.setState({
			volume: this.audioPlayerRef.current.volume
		});
	}

	mouseDown(event) {
		if (this.isDraggable(event.target)) {
			this.setState({
				currentlyDragged: event.target
			});
		}
	}

	mouseMove(event) {
		let currentlyDragged = this.state.currentlyDragged;
		if (currentlyDragged != null) {
			this[this.state.currentlyDragged.dataset.method](event);
		}
	}

	mouseUp() {
		this.setState({
			currentlyDragged: null
		});
	}

	isDraggable(element) {
		let draggable = false;
		Array.from(element.classList).forEach(elementClass => {
			if (elementClass === "pin") {
				draggable = true;
			}
		});
		return draggable;
	}

	getRangeBox(event) {
		let rangeBox = event.target;
		let element = this.state.currentlyDragged;
		if(event.type === "click" && this.isDraggable(event.target)) {
			rangeBox = event.target.parentElement.parentElement;
		}
		if(event.type === "mousemove") {
			rangeBox = element.parentElement.parentElement;
		}
		return rangeBox;
	}

	inRange(event) {
		let rangeBox = this.getRangeBox(event);
		if (rangeBox == null) {
			return false;
		}

		let rect = rangeBox.getBoundingClientRect();
		let direction = rangeBox.dataset.direction;
		if(direction === "horizontal") {
			let min = rangeBox.offsetLeft;
			let max = min + rangeBox.offsetWidth;   
			if(event.clientX < min || event.clientX > max) {
				return false;
			}
		}
		else if (direction === "vertical") {
			let min = rect.top;
			let max = min + rangeBox.offsetHeight; 
			if(event.clientY < min || event.clientY > max) {
				return false;  
			}
		}
		return true;
	}

	getCoefficient(event) {
		let slider = this.getRangeBox(event);
		let rect = slider.getBoundingClientRect();
		let K = 0;
		if(slider.dataset.direction === "horizontal") {
			let offsetX = event.clientX - slider.offsetLeft;
			let width = slider.clientWidth;
			K = offsetX / width;    
		}
		else if(slider.dataset.direction === "vertical") {
			let height = slider.clientHeight;
			var offsetY = event.clientY - rect.top;
			K = 1 - offsetY / height;
		}
		return K;
	}

	changeProgress(event) {
		if(this.inRange(event)) {
			let audioPlayer = this.audioPlayerRef.current;
			audioPlayer.currentTime = audioPlayer.duration * this.getCoefficient(event);
		}
	}

	changeVolume(event) {
		if(this.inRange(event)) {
			let audioPlayer = this.audioPlayerRef.current;
			audioPlayer.volume = this.getCoefficient(event);
			this.updateVolume();
		}
	}

	render() {
		const formatTime = (time) => {
			var min = Math.floor(time / 60);
			var sec = Math.floor(time % 60);
			return min + ":" + ((sec < 10) ? ("0" + sec) : sec);
		};

		const renderPlayButton = () => {
			if (this.state.canPlay) {
				return <div className={this.state.playing ? "pause-btn" : "play-btn"} onClick={this.togglePlay}></div>;
			}
			return (
				<div className="loading">
					<div className="spinner"></div>
				</div>
			);
		};

		const getProgress = () => {
			let currentTime = this.state.currentTime;
			let duration = this.state.duration;

			let percent = 0;
			if (duration !== 0) {
				percent = (currentTime / duration) * 100;
			}

			return percent + "%";
		};

		const getVolume = () => {
			return this.state.volume * 100 + "%";
		};

		const renderVolumeControls = () => {
			if (this.state.volumeControlsOpen) {
				return (
					<div className="volume-controls">
						<div className="slider" ref={this.volumeSliderRef} data-direction="vertical" onClick={(event) => this.changeVolume(event)}>
							<div className="slider-bar" style={{height: getVolume()}}>
								<div className="pin" id="volume-pin" data-method="changeVolume"></div>
							</div>
						</div>
					</div>
				);
			}
			return null;
		};

		return (
			<div
				className="CardAudio"
				onMouseDown={this.mouseDown}
				onMouseMove={this.mouseMove}
				onMouseUp={this.mouseUp}
			>
				{renderPlayButton()}

				<div className="controls">
					<span className="current-time">{formatTime(this.state.currentTime)}</span>
					<div className="slider" ref={this.progressSliderRef} data-direction="horizontal" onClick={(event) => this.changeProgress(event)}>
						<div className="slider-bar" style={{width: getProgress()}}>
							<div className="pin" id="progress-pin" data-method="changeProgress"></div>
						</div>
					</div>
					<span className="total-time">{formatTime(this.state.duration)}</span>
				</div>

				<div className="volume">
					<div className="volume-btn" onClick={this.toggleVolumeControls}></div>
					{renderVolumeControls()}
				</div>

				<audio
					crossOrigin="anonymous"
					ref={this.audioPlayerRef}
					onCanPlay={this.canPlay}
					onTimeUpdate={this.updateTime}
					onEnded={this.ended}
				>
					<source src={this.props.audio} type="audio/mpeg" />
				</audio>
			</div>
		);
	}
}
