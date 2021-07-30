import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import {loadImages} from '../../actions';
import Button from '../Button';
//const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    componentDidMount() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });
        this.props.loadImages();
    }

    render() {
        // eslint-disable-next-line
        const { isLoading, images, loadImages, error, imageStats  } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error}) => ({
    isLoading,
    images,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
