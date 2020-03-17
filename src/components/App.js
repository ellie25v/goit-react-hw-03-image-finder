import React, {Component} from 'react';
import Searchbar from './searchbar/Searchbar'
import Modal from './modal/Modal'
import LoaderPage from './loader/Loader'
import ImageGallery from './imageGallery/ImageGallery'
import Button from './button/Button'
import axios from 'axios';
import './App.css';
const KEY = '15313999-a5df735b9fa1cf713cf16d2ec'

class App extends Component {
  state = { 
    galleryItems: [],
    isLoading: true, 
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: "",
    openModal: false
   }

  handleSubmit = (e) => {
    // e.preventDefault();
    const {searchQuery, page} = this.state
    this.setState({isLoading: true})
    axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then((data) => this.setState(prevState => ({galleryItems: [...prevState.galleryItems, ...data.data.hits]}))).finally(() => this.setState({isLoading:false}))
  }
  componentDidMount() {
    this.handleSubmit()
  }
  handleOnSubmit = async (e) =>{
    e.preventDefault()
    await this.setState({galleryItems : []})
    await this.handleSubmit()
  }
  handleChange = (e) =>{
    const val = e.target.value
    this.setState({searchQuery: val})
  }
  buttonMore = async () =>{
    await this.setState(prevState => ({page: prevState.page+1}))
    await this.handleSubmit()
  }
  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  handleClick = e => {
    const imageUrl = e.currentTarget.parentElement.querySelector('img').dataset
      .image;

    this.setState({
      openModal: !this.state.openModal,
      largeImageUrl: imageUrl,
    });
  };
  
  closeModalinModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    const {isLoading, galleryItems, searchQuery} = this.state;
    return (
      <div className='App'>
        <Searchbar handleOnSubmit={this.handleOnSubmit} handleChange={this.handleChange} searchQuery={searchQuery}/>
        {isLoading && <LoaderPage /> }
        <ImageGallery galleryItems={galleryItems}  handleClick={this.handleClick}/>
        <Button buttonMore={this.buttonMore}/>
        {this.state.openModal &&
        
          <Modal
            closeModalinModal={this.closeModalinModal}
            largeImageUrl={this.state.largeImageUrl}
          />
        }
      
      </div>
    );
  }
}

export default App;