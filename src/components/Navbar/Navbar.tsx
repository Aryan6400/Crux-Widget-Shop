import './Navbar.css'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import CreateModal from '../CreateModal/CreateModal'

function Navbar() {
    const [popup, setPopup] = useState(false);

    const openModal = () => {
        setPopup(true)
    }

    const closeModal = () => {
        setPopup(false)
    }

    return (
        <>
            <nav>
                <ul className='left-nav'>
                    <li style={{ padding: "0 10px 0 20px" }}>
                        <svg width="16" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.39995 18.6663V9.99967H11.6V18.6663M1.19995 7.39967L8.99995 1.33301L16.8 7.39967V16.933C16.8 17.3927 16.6173 17.8336 16.2923 18.1587C15.9672 18.4837 15.5263 18.6663 15.0666 18.6663H2.93328C2.47358 18.6663 2.0327 18.4837 1.70763 18.1587C1.38257 17.8336 1.19995 17.3927 1.19995 16.933V7.39967Z" stroke="#99999B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </li>
                    <li className='nav-btn-box'>
                        <span className='navbar-text'>Overview</span>
                    </li>
                    <li className='nav-btn-box nav-btn-box-active'>
                        <span className='navbar-text active-nav-btn'>Customers</span><CloseIcon style={{width:"16px", height:"16px", color:"#5E5ADB"}} />
                    </li>
                    <li className='nav-btn-box'>
                        <span className='navbar-text'>Products</span>
                    </li>
                    <li style={{ border: "1px solid #E0DFF866" }} className='nav-btn-box'>
                        <span className='navbar-text'>Settings</span>
                    </li>
                    <li className='add-icon'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1_2321" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 0.666667C7.66667 0.29848 7.36819 0 7 0C6.63181 0 6.33333 0.29848 6.33333 0.666667V6.33333H0.666667C0.29848 6.33333 0 6.63181 0 7C0 7.36819 0.29848 7.66667 0.666667 7.66667H6.33333V13.3333C6.33333 13.7015 6.63181 14 7 14C7.36819 14 7.66667 13.7015 7.66667 13.3333V7.66667H13.3333C13.7015 7.66667 14 7.36819 14 7C14 6.63181 13.7015 6.33333 13.3333 6.33333H7.66667V0.666667Z" />
                            </mask>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 0.666667C7.66667 0.29848 7.36819 0 7 0C6.63181 0 6.33333 0.29848 6.33333 0.666667V6.33333H0.666667C0.29848 6.33333 0 6.63181 0 7C0 7.36819 0.29848 7.66667 0.666667 7.66667H6.33333V13.3333C6.33333 13.7015 6.63181 14 7 14C7.36819 14 7.66667 13.7015 7.66667 13.3333V7.66667H13.3333C13.7015 7.66667 14 7.36819 14 7C14 6.63181 13.7015 6.33333 13.3333 6.33333H7.66667V0.666667Z" fill="#030712" />
                            <path d="M6.33333 6.33333V8.20833H8.20833V6.33333H6.33333ZM6.33333 7.66667H8.20833V5.79167H6.33333V7.66667ZM7.66667 7.66667V5.79167H5.79167V7.66667H7.66667ZM7.66667 6.33333H5.79167V8.20833H7.66667V6.33333ZM9.54167 0.666667C9.54167 -0.737054 8.40372 -1.875 7 -1.875V1.875C6.33265 1.875 5.79167 1.33401 5.79167 0.666667H9.54167ZM7 -1.875C5.59628 -1.875 4.45833 -0.737054 4.45833 0.666667H8.20833C8.20833 1.33401 7.66735 1.875 7 1.875V-1.875ZM4.45833 0.666667V6.33333H8.20833V0.666667H4.45833ZM6.33333 4.45833H0.666667V8.20833H6.33333V4.45833ZM0.666667 4.45833C-0.737054 4.45833 -1.875 5.59628 -1.875 7H1.875C1.875 7.66735 1.33401 8.20833 0.666667 8.20833V4.45833ZM-1.875 7C-1.875 8.40372 -0.737054 9.54167 0.666667 9.54167V5.79167C1.33401 5.79167 1.875 6.33265 1.875 7H-1.875ZM0.666667 9.54167H6.33333V5.79167H0.666667V9.54167ZM4.45833 7.66667V13.3333H8.20833V7.66667H4.45833ZM4.45833 13.3333C4.45833 14.7369 5.59618 15.875 7 15.875V12.125C7.66745 12.125 8.20833 12.666 8.20833 13.3333H4.45833ZM7 15.875C8.40382 15.875 9.54167 14.7369 9.54167 13.3333H5.79167C5.79167 12.666 6.33256 12.125 7 12.125V15.875ZM9.54167 13.3333V7.66667H5.79167V13.3333H9.54167ZM7.66667 9.54167H13.3333V5.79167H7.66667V9.54167ZM13.3333 9.54167C14.7369 9.54167 15.875 8.40382 15.875 7H12.125C12.125 6.33256 12.666 5.79167 13.3333 5.79167V9.54167ZM15.875 7C15.875 5.59618 14.7369 4.45833 13.3333 4.45833V8.20833C12.666 8.20833 12.125 7.66745 12.125 7H15.875ZM13.3333 4.45833H7.66667V8.20833H13.3333V4.45833ZM9.54167 6.33333V0.666667H5.79167V6.33333H9.54167Z" fill="#5E5ADB" mask="url(#path-1-inside-1_1_2321)" />
                        </svg>
                    </li>
                </ul>
                <ul className='right-nav'>
                    <li className='add-widget-link' onClick={openModal}>
                        <div className='plus-icon'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_1_2324" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 0.666667C7.66667 0.29848 7.36819 0 7 0C6.63181 0 6.33333 0.29848 6.33333 0.666667V6.33333H0.666667C0.29848 6.33333 0 6.63181 0 7C0 7.36819 0.29848 7.66667 0.666667 7.66667H6.33333V13.3333C6.33333 13.7015 6.63181 14 7 14C7.36819 14 7.66667 13.7015 7.66667 13.3333V7.66667H13.3333C13.7015 7.66667 14 7.36819 14 7C14 6.63181 13.7015 6.33333 13.3333 6.33333H7.66667V0.666667Z" />
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 0.666667C7.66667 0.29848 7.36819 0 7 0C6.63181 0 6.33333 0.29848 6.33333 0.666667V6.33333H0.666667C0.29848 6.33333 0 6.63181 0 7C0 7.36819 0.29848 7.66667 0.666667 7.66667H6.33333V13.3333C6.33333 13.7015 6.63181 14 7 14C7.36819 14 7.66667 13.7015 7.66667 13.3333V7.66667H13.3333C13.7015 7.66667 14 7.36819 14 7C14 6.63181 13.7015 6.33333 13.3333 6.33333H7.66667V0.666667Z" fill="#030712" />
                                <path d="M6.33333 6.33333V8.20833H8.20833V6.33333H6.33333ZM6.33333 7.66667H8.20833V5.79167H6.33333V7.66667ZM7.66667 7.66667V5.79167H5.79167V7.66667H7.66667ZM7.66667 6.33333H5.79167V8.20833H7.66667V6.33333ZM9.54167 0.666667C9.54167 -0.737054 8.40372 -1.875 7 -1.875V1.875C6.33265 1.875 5.79167 1.33401 5.79167 0.666667H9.54167ZM7 -1.875C5.59628 -1.875 4.45833 -0.737054 4.45833 0.666667H8.20833C8.20833 1.33401 7.66735 1.875 7 1.875V-1.875ZM4.45833 0.666667V6.33333H8.20833V0.666667H4.45833ZM6.33333 4.45833H0.666667V8.20833H6.33333V4.45833ZM0.666667 4.45833C-0.737054 4.45833 -1.875 5.59628 -1.875 7H1.875C1.875 7.66735 1.33401 8.20833 0.666667 8.20833V4.45833ZM-1.875 7C-1.875 8.40372 -0.737054 9.54167 0.666667 9.54167V5.79167C1.33401 5.79167 1.875 6.33265 1.875 7H-1.875ZM0.666667 9.54167H6.33333V5.79167H0.666667V9.54167ZM4.45833 7.66667V13.3333H8.20833V7.66667H4.45833ZM4.45833 13.3333C4.45833 14.7369 5.59618 15.875 7 15.875V12.125C7.66745 12.125 8.20833 12.666 8.20833 13.3333H4.45833ZM7 15.875C8.40382 15.875 9.54167 14.7369 9.54167 13.3333H5.79167C5.79167 12.666 6.33256 12.125 7 12.125V15.875ZM9.54167 13.3333V7.66667H5.79167V13.3333H9.54167ZM7.66667 9.54167H13.3333V5.79167H7.66667V9.54167ZM13.3333 9.54167C14.7369 9.54167 15.875 8.40382 15.875 7H12.125C12.125 6.33256 12.666 5.79167 13.3333 5.79167V9.54167ZM15.875 7C15.875 5.59618 14.7369 4.45833 13.3333 4.45833V8.20833C12.666 8.20833 12.125 7.66745 12.125 7H15.875ZM13.3333 4.45833H7.66667V8.20833H13.3333V4.45833ZM9.54167 6.33333V0.666667H5.79167V6.33333H9.54167Z" fill="#5E5ADB" mask="url(#path-1-inside-1_1_2324)" />
                            </svg>
                        </div>
                        <span className='navbar-text active-nav-btn'>Add Widget</span>
                    </li>
                    <li style={{ cursor: "pointer" }}>
                        <svg width="20" height="22" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1613 1H10.6773C10.0939 1 9.53428 1.23178 9.1217 1.64436C8.70912 2.05695 8.47734 2.61652 8.47734 3.2V3.398C8.47694 3.7838 8.3751 4.16271 8.18203 4.49672C7.98896 4.83073 7.71145 5.1081 7.37734 5.301L6.90434 5.576C6.5699 5.76909 6.19052 5.87074 5.80434 5.87074C5.41816 5.87074 5.03878 5.76909 4.70434 5.576L4.53934 5.488C4.03451 5.19679 3.43476 5.11779 2.87174 5.26834C2.30872 5.41889 1.82844 5.78669 1.53634 6.291L1.29434 6.709C1.00313 7.21383 0.924126 7.81358 1.07468 8.3766C1.22523 8.93962 1.59303 9.41989 2.09734 9.712L2.26234 9.822C2.59484 10.014 2.87132 10.2896 3.06429 10.6215C3.25727 10.9534 3.36002 11.3301 3.36234 11.714V12.275C3.36388 12.6627 3.26295 13.0438 3.06979 13.38C2.87662 13.7161 2.59807 13.9952 2.26234 14.189L2.09734 14.288C1.59303 14.5801 1.22523 15.0604 1.07468 15.6234C0.924126 16.1864 1.00313 16.7862 1.29434 17.291L1.53634 17.709C1.82844 18.2133 2.30872 18.5811 2.87174 18.7317C3.43476 18.8822 4.03451 18.8032 4.53934 18.512L4.70434 18.424C5.03878 18.2309 5.41816 18.1293 5.80434 18.1293C6.19052 18.1293 6.5699 18.2309 6.90434 18.424L7.37734 18.699C7.71145 18.8919 7.98896 19.1693 8.18203 19.5033C8.3751 19.8373 8.47694 20.2162 8.47734 20.602V20.8C8.47734 21.3835 8.70912 21.9431 9.1217 22.3556C9.53428 22.7682 10.0939 23 10.6773 23H11.1613C11.7448 23 12.3044 22.7682 12.717 22.3556C13.1296 21.9431 13.3613 21.3835 13.3613 20.8V20.602C13.3617 20.2162 13.4636 19.8373 13.6566 19.5033C13.8497 19.1693 14.1272 18.8919 14.4613 18.699L14.9343 18.424C15.2688 18.2309 15.6482 18.1293 16.0343 18.1293C16.4205 18.1293 16.7999 18.2309 17.1343 18.424L17.2993 18.512C17.8042 18.8032 18.4039 18.8822 18.9669 18.7317C19.53 18.5811 20.0102 18.2133 20.3023 17.709L20.5443 17.28C20.8355 16.7752 20.9146 16.1754 20.764 15.6124C20.6134 15.0494 20.2456 14.5691 19.7413 14.277L19.5763 14.189C19.2406 13.9952 18.9621 13.7161 18.7689 13.38C18.5757 13.0438 18.4748 12.6627 18.4763 12.275V11.725C18.4748 11.3373 18.5757 10.9562 18.7689 10.62C18.9621 10.2839 19.2406 10.0048 19.5763 9.811L19.7413 9.712C20.2456 9.41989 20.6134 8.93962 20.764 8.3766C20.9146 7.81358 20.8355 7.21383 20.5443 6.709L20.3023 6.291C20.0102 5.78669 19.53 5.41889 18.9669 5.26834C18.4039 5.11779 17.8042 5.19679 17.2993 5.488L17.1343 5.576C16.7999 5.76909 16.4205 5.87074 16.0343 5.87074C15.6482 5.87074 15.2688 5.76909 14.9343 5.576L14.4613 5.301C14.1272 5.1081 13.8497 4.83073 13.6566 4.49672C13.4636 4.16271 13.3617 3.7838 13.3613 3.398V3.2C13.3613 2.61652 13.1296 2.05695 12.717 1.64436C12.3044 1.23178 11.7448 1 11.1613 1Z" stroke="#667085" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.9193 15.3C12.7419 15.3 14.2193 13.8225 14.2193 12C14.2193 10.1775 12.7419 8.7 10.9193 8.7C9.0968 8.7 7.61934 10.1775 7.61934 12C7.61934 13.8225 9.0968 15.3 10.9193 15.3Z" stroke="#667085" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </li>
                </ul>
            </nav>
            <CreateModal open={popup} toggle={closeModal} />
        </>
    );
}

export default Navbar;
