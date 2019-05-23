import React from 'react';
import "../styles/gallery.scss";
import Crotia from '../gallery/croatia';
import Corsica from '../gallery/corsica';

class Gallery extends React.Component {
    state = {
        gallery: Crotia,
        current: 0,
        active: false
    }
    imageClick = (current) => {

        this.setState({
            current,
            active: true
        })
    }
    hideLb = () => {
        this.setState({
            active: false
        })
    }
    next = () => {
        if (this.state.current < this.state.gallery.length - 1) {
            this.setState({
                current: this.state.current + 1
            })
        } else {
            this.setState({
                current: 0
            })
        }

    }
    prev = () => {
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1
            })
        } else {
            this.setState({
                current: this.state.gallery.length - 1
            })
        }

    }

    changeGallery = (name) => {

        if (name === 'croatia') {
            this.setState({
                gallery: Crotia,
            })
        }

        if (name === 'corsica') {
            this.setState({
                gallery: Corsica,
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className={`lightbox__bg ${this.state.active ? 'show' : 'hide'}`} onClick={this.hideLb}>

                </div>
                <div className="container">
                    <div className="lightbox__btns">
                        <div className="lightbox__btns__btn btn--croatia" onClick={() => this.changeGallery('croatia')}>Croatia</div>
                        <div className="lightbox__btns__btn btn--croatia" onClick={() => this.changeGallery('corsica')}>Corsica</div>
                    </div>
                    <div className="gallery">
                        <div className="thumbnails">
                            {this.state.gallery.map((item, index) => (

                                <div
                                    className="thumbnails__thumbnail"
                                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL / item.thumbnail})` }}
                                    key={index}
                                    onClick={() => this.imageClick(index)} >

                                </div>

                            ))
                            }

                        </div>
                    </div>
                </div>
                <div className={`${this.state.active ? 'show' : 'hide'}`}>
                    <img className="lightbox__close" src="./images/lightbox/close.svg" onClick={this.hideLb} />
                    <img className="lightbox__arrow lightbox__arrow--prev" src="./images/lightbox/prev.svg" onClick={this.prev} />
                    <img className={`lightbox__img ${this.state.active ? 'show' : 'hide'}`} src={this.state.gallery[this.state.current].lightbox} alt={this.state.current.alt} />
                    <p className="lightbox__caption">{this.state.gallery[this.state.current].caption}</p>
                    <img className="lightbox__arrow lightbox__arrow--next" src="./images/lightbox/next.svg" onClick={this.next} />
                </div>

            </React.Fragment>
        )
    }

}

export default Gallery;