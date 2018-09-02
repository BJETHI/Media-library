import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectImageAction, searchMediaAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import PropTypes from 'prop-types';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
    state = {
        search: ''
    }

    // We want to get images and videos from the API right after our component renders.
    componentDidMount() {
        this.props.dispatch(searchMediaAction('rain'));
    }
    // Dispatches *selectImageAction* when any image is clicked
    handleSelectImage = (selectedImage) => {
        this.props.dispatch(selectImageAction(selectedImage));
    }

    // Dispatches *selectvideoAction* when any video is clicked
    handleSelectVideo = (selectedVideo) => {
        this.props.dispatch(selectVideoAction(selectedVideo));
    }

    // Dispatches *searchMediaAction* with query param.
    // We ensure action is dispatched to the store only if query param is provided.
    handleSearch = (event, search) => {
        event.preventDefault();
        if (search !== null) {
            this.props.dispatch(searchMediaAction(search));
            //this.query.value = '';
            this.setState({
                search: ''
            })
        }
    }

    handleState = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const { images, videos ,selectedImage,selectedVideo} = this.props;
        return (
            <div className="container-fluid">
                {(images && selectedImage)&&(videos && selectedVideo) ? 
                <div>
                    <input type="text" onChange={this.handleState} />
                    <input type="submit" className="btn btn-primary" value="Search Library" onClick={(e) => this.handleSearch(e, this.state.search)} />
                    <div className="row">
                        <PhotoPage images={images}
                            selectedImage={selectedImage}
                            onHandleSelectImage={this.handleSelectImage}
                        />
                        <VideoPage videos={videos}
                            selectedVideo={selectedVideo}
                            onHandleSelectVideo={this.handleSelectVideo}
                        />
                    </div>
                </div>
                  : 'loading ....'} 
            </div>
        );
    }
}

// Define PropTypes
MediaGalleryPage.propTypes = {
    images: PropTypes.array,
    selectedImage: PropTypes.object,
    videos: PropTypes.array,
    selectedVideo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

// Subscribe component to redux store and merge the state into 
// component's props
const mapStateToProps = ({ images, videos,selectedImage, selectedVideo }) => ({
    images: images[0],
    videos: videos[0],
    selectedImage: images.selectedImage,
    selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(MediaGalleryPage);