import React,{Component} from 'react'
import Link from 'next/link'
import Header from '../common/Header';
import HomePage from '../components/HomePage';
import MediaGalleryPage from '../containers/MediaGalleryPage';

class Library extends Component {
    render() {
        return (
            < div className="container-fluid text-center" >
                <Header />
                <MediaGalleryPage />
            </div >
        )
    }
}

export default Library;