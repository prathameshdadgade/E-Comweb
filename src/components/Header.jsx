import React, { Component } from 'react';
import './Header.css'; 
import Messho from '../assets/img/Meesho Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg';
import Search from '../assets/img/search.png';
import Mobile from '../assets/img/mobile.png';
import User from '../assets/img/user.png';
import Card from '../assets/img/cart.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      recentInputs: [],
      isSearchVisible: false
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      isSearchVisible: event.target.value.length > 0
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { inputValue, recentInputs } = this.state;
    if (inputValue) {
      this.setState({
        recentInputs: [inputValue, ...recentInputs],
        inputValue: '',
        isSearchVisible: false
      });
    }
  };

  clearInput = () => {
    this.setState({
      inputValue: '',
      isSearchVisible: false
    });
  };

  render() {
    const { inputValue, recentInputs, isSearchVisible } = this.state;

    return (
      <header className="header">
        <div className="headerLeft">
          <div className="logoContainer">
            <img src={Messho} alt="Meesho Logo" />
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img src={Search} alt="Search Icon" />
            </div>
            <form id="inputForm" onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="inputSearch"
                value={inputValue}
                onChange={this.handleInputChange}
              />
            </form>
            {isSearchVisible && (
              <div className="inputCloseSearch">
                <i className="fa-solid fa-xmark" onClick={this.clearInput}></i>
              </div>
            )}
            <div className="searchRecentModal">
              <h3>Recent Searches</h3>
              <div className="listofRecent">
                {recentInputs.map((item, index) => (
                  <div className="recentItem" key={index}>
                    <div className="recentIcon">
                      <img src="./img/recent.png" alt="Recent Icon" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={Mobile} alt="Mobile Icon" />
            </div>
            <p>Download App</p>
            <div className="downloadHoverBtnContainer">
              <h3>Download From</h3>
              <a href="" className="downloadBtn">
                <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="Play Store" />
              </a>
              <a href="" className="downloadBtn">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt="App Store" />
              </a>
            </div>
          </div>
          <div className="becomeSupplierContainer">
            <p>Become a Supplier</p>
          </div>
          <div className="profileAndCart">
            <div className="profileContainer">
              <div className="profileIcon">
                <img src={User} alt="Profile Icon" />
              </div>
              <p>Profile</p>
            </div>
            <div className="CartContainer">
              <div className="CartIcon">
                <img src={Card} alt="Cart Icon" />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
