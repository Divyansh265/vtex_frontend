
import "./Header.css"; // Import your custom styles here
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';


const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearchModal = () => {
        setIsSearchOpen((prevState) => !prevState); // Toggle the modal visibility
    };
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top-left">
                    <div className="left-icons">
                        <i className="icon-bag">
                            {" "}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0013 6.99281C16.5536 6.99281 17.0013 6.54509 17.0013 5.99281C17.0013 3.23511 14.7624 1 12.0017 1C9.24033 1 7.00127 3.23495 7.00127 5.99281V8H4.44826C3.44327 8 2.59436 8.74578 2.46492 9.7424L1.03619 20.7424C1.0251 20.8278 1.01953 20.9139 1.01953 21C1.01953 22.1046 1.91496 23 3.01953 23H20.9232C21.0093 23 21.0953 22.9944 21.1808 22.9833C22.2761 22.8411 23.0488 21.8378 22.9065 20.7424L21.4778 9.7424C21.3483 8.74578 20.4994 8 19.4944 8H9.00127V5.99281C9.00127 4.34034 10.3441 3 12.0017 3C13.6586 3 15.0013 4.34044 15.0013 5.99281C15.0013 6.54509 15.449 6.99281 16.0013 6.99281ZM7.00127 10V12C7.00127 12.5523 7.44898 13 8.00127 13C8.55355 13 9.00127 12.5523 9.00127 12V10H19.4944L20.9232 21H3.01953L4.44826 10H7.00127Z" fill="black"></path>
                            </svg>{" "}
                        </i>
                        <span className="icon-counter">1</span>
                        <i className="icon-heart"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.846 19.358a67.975 67.975 0 0 0 2.62-1.877c2.132-1.596 3.965-3.11 4.528-3.762C21.382 12.115 22 10.683 22 9.163c0-1.39-.48-2.68-1.346-3.635C19.759 4.541 18.524 4 17.156 4c-.5 0-.963.075-1.396.218a1 1 0 1 1-.627-1.9A6.417 6.417 0 0 1 17.156 2c1.93 0 3.704.777 4.98 2.185C23.34 5.514 24 7.284 24 9.163c0 2.04-.811 3.92-2.493 5.864C20.045 16.72 12.99 22 12 22c-.99 0-8.045-5.281-9.507-6.973C.81 13.083 0 11.204 0 9.163c0-1.88.66-3.649 1.864-4.978C3.14 2.777 4.914 2 6.844 2c2.34 0 4.136 1.13 5.417 2.887.226.31.43.634.639 1.015l.44.906a1 1 0 0 1-1.8.874l-.416-.86a7.132 7.132 0 0 0-.48-.758C9.71 4.781 8.467 4 6.844 4c-1.368 0-2.603.541-3.498 1.528C2.481 6.483 2 7.772 2 9.163c0 1.52.618 2.952 2.006 4.556.563.652 2.396 2.166 4.528 3.762.966.723 1.9 1.392 2.62 1.877.345.232.633.416.846.542.213-.125.5-.31.846-.542Z"></path></svg> </i>
                    </div>
                    <div className="middle-section">
                        <select className="language-selector">
                            <option value="english">English</option>
                        </select>
                        <div className="country-selector">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-arab-emirates-flag-icon.png" alt="UAE Flag" />
                        </div>
                    </div>
                    <div className="right-links">
                        <a href="/login" className="link">
                            Register a New Account / Login
                        </a>
                        <Link to="#" className="link" onClick={toggleSearchModal}>
                            <i className="icon-search"></i> Search
                        </Link>
                        {isSearchOpen && <SearchModal onClose={toggleSearchModal} />}
                    </div>
                </div>

                <Link to="/">
                    <div class="header-top-right logo">
                        {/* <h1>leem</h1> */}
                        <span className="icon icon--fill header__image-logo"><svg width="75" height="27" fill="#00524d" viewBox="0 0 75 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.824 16.523V1.145c0-.577 0-.864-.143-1.007-.142-.14-.425-.14-.986-.138C.017.003.017.003.017.704v6.014C.017 13 .016 19.281.02 25.562c0 .174-.007.324-.012.452-.03.69-.033.753 1.187.734.553-.009.63-.084.63-.658v-9.567Zm47.798-5.233c1.444-1.575 3.252-2.24 5.315-2.026 2.18.226 4.31 1.55 5.37 4.326.086-.16.167-.322.248-.483.177-.353.353-.704.572-1.024 1.023-1.49 2.41-2.438 4.175-2.748 2.108-.37 3.964.22 5.5 1.72a6.525 6.525 0 0 1 1.967 4.05c.052.474.082.952.083 1.428.006 2.473.005 4.946.004 7.419v2.073c0 .575-.133.71-.693.723-1.296.027-1.293-.074-1.268-.836.004-.123.009-.263.009-.422v-.248c-.004-3.125-.008-6.25 0-9.374.006-1.653-.517-3.117-1.627-4.287-1.889-1.99-4.702-2.115-6.724-.207-1.025.967-1.603 2.16-1.849 3.536-.059.33-.056.673-.053 1.014l.002.243c-.003 2.288-.003 4.577-.002 6.865v3.018c0 .602-.094.694-.695.698-.598.003-.897.004-1.047-.145-.15-.149-.15-.45-.152-1.05v-.006c-.002-1.012.002-2.025.006-3.038v-.002c.008-2.426.016-4.853-.049-7.277-.066-2.436-1.942-4.763-4.321-5.131-1.567-.242-2.873.24-4.015 1.298-.377.35-.45.354-.756-.107Zm-1.27 6.926.001-2.138c.001-1.74.002-3.479-.002-5.218 0-.163.003-.303.006-.425.008-.334.013-.522-.078-.627-.118-.136-.395-.134-1.032-.13l-.066.001c-.637.005-.697.063-.697.72V25.462c0 .14-.003.265-.005.376-.017.875-.019.932 1.285.91.508-.009.588-.094.588-.609V18.216Zm-7.74-3.6c.385.995.623 2.032.594 3.164H29.79l-.068-.001c-.208-.004-.421-.008-.42.311.002.314.206.306.403.298l.089-.002h7.644c1.748-.001 3.496-.002 5.245.006.344.001.51-.116.479-.476l-.009-.102c-.023-.267-.047-.533-.075-.8-.215-1.986-1.017-3.708-2.391-5.105-2.182-2.217-4.811-3.072-7.86-2.495-3.8.719-6.733 4.03-7.001 8.084-.173 2.597.653 4.888 2.442 6.748 2.103 2.186 4.675 3.052 7.646 2.586 1.847-.29 3.421-1.141 4.729-2.51.148-.154.287-.307.089-.504-.199-.196-.36-.098-.538.08-1.267 1.281-2.768 2.069-4.545 2.344-2.19.34-4.069-.293-5.573-1.898-2.032-2.167-2.627-4.832-2.227-7.75.306-2.229 1.28-4.109 3.06-5.464 1.877-1.427 3.939-1.678 6.074-.674 1.782.838 2.918 2.327 3.629 4.16ZM20.74 17.78c-.038-1.455-.345-2.78-.985-4.002-1.024-1.953-2.508-3.387-4.692-3.807-1.905-.366-3.623.177-5.085 1.496-1.412 1.274-2.278 2.887-2.6 4.766-.516 3.023.06 5.8 2.157 8.079 1.72 1.87 3.883 2.382 6.305 1.804 1.5-.358 2.783-1.114 3.88-2.22.064-.064.18-.074.297-.085.054-.004.107-.01.156-.02-.003.056 0 .118.004.18.008.134.016.268-.045.334-1.174 1.26-2.6 2.08-4.265 2.44-2.585.557-4.967.054-7.077-1.578-1.814-1.402-2.943-3.265-3.33-5.579-.435-2.596.172-4.932 1.744-6.987 1.3-1.699 3.006-2.768 5.092-3.186 2.558-.514 4.887.042 6.945 1.647 1.777 1.385 2.881 3.231 3.255 5.505.053.325.09.653.126.98v.001l.034.298c.048.416-.136.548-.54.547-3.763-.01-7.526-.008-11.289-.006H9.271l-.058.001c-.198.003-.402.006-.41-.277-.01-.33.234-.333.476-.333 2.913.002 5.825.002 8.738.002h2.724Z"></path>
                        </svg>
                        </span>
                    </div>
                </Link>
            </div>

            <nav className="header-nav">
                <Link to="/discounts" className="nav-item">
                    Discounts
                </Link>
                <Link to="/groups" className="nav-item">
                    Groups
                </Link>
                <Link to="/accessories" className="nav-item">
                    Accessories
                </Link>
                <Link to="/comfortable-clothes" className="nav-item">
                    Comfortable Clothes
                </Link>
                <Link to="/dresses-and-kaftans" className="nav-item">
                    Dresses and Kaftans
                </Link>
                <Link to="/clothes" className="nav-item">
                    Clothes
                </Link>
                <Link to="/new-releases" className="nav-item">
                    New Releases
                </Link>
            </nav>
        </header>
    );
};

export default Header;
