import React, { Component } from "react";

class Modal extends Component {
    escapeHandler = event => {
        if (event.keyCode === 27) {
            this.props.closeModalinModal(event);
        }
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.closeModalinModal(event);
        }
    };

    componentDidMount() {
        window.addEventListener("keydown", this.escapeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.escapeHandler);
    }

    render() {
        const { largeImageUrl } = this.props;

        return (
            <div className='Modal'>
                <div className='Overlay' onClick={this.handleOverlayClick}>
                    <img
                        src={largeImageUrl}
                        alt="other"
                        className='modalImage'>
                    </img>
                    {/* <button
                        type="button"
                        className='closeButton'
                        data-action="close-lightbox"
                        onClick={closeModalinModal}
                    >
                        <i className="material-icons">close</i>
                    </button> */}
                </div>
            </div>
        );
    }
}


export default Modal;