// import React, { useState } from 'react';
// import AuthModal from '../components/Modal';

// const Header = () => {
//   let Links = [
//     { id: 1, name: 'Hỏi gia sư', link: '/' },
//     { id: 2, name: 'chuyên đề', link: '/chuyen-de' },
//     { id: 3, name: 'Trắc nghiệm', link: '/' },
//     { id: 4, name: 'Tài liệu', link: '/' },
//   ];
//   let [open, setOpen] = useState(false);

//   return (
//     <header className='shadow-md w-full '>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         {/* logo section */}
//         <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
//           {/* <BookOpenIcon className='w-7 h-7 text-blue-600' /> */}
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-6 h-6 text-blue-600'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
//             />
//           </svg>

//           <span>Inscribe</span>
//         </div>
//         {/* Menu icon */}
//         <div
//           onClick={() => setOpen(!open)}
//           className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
//         >
//           {open ? (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-6 h-6'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M6 18L18 6M6 6l12 12'
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-6 h-6'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
//               />
//             </svg>
//           )}
//         </div>
//         {/* linke items */}
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? 'top-12' : 'top-[-490px]'
//           }`}
//         >
//           {Links.map((link) => (
//             <li key={link.id} className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <a
//                 href={link.link}
//                 className='text-gray-800 hover:text-blue-400 duration-500'
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <button className=' bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static '>
//             <AuthModal />
//           </button>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../components/HeaderComponent.js';
import AuthModal from '../components/Modal.js';

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Logo</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Hỏi gia sư
          </NavLink>

          <NavLink to='/chuyen-de' activeStyle>
            Chuyên đề
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <AuthModal />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
