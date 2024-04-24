// // import React from 'react';
// import Card from './Card';
// import EarningsList from './api';
// // import getEarnings from './EarningsList';

// // const Dashboard = ({ previousBookings, todayEarnings, nextDayEarnings }) => {
// //   return (
// //     <div className="container">
// //       <h1>Dashboard</h1>
// //       <div className="row mt-4">
// //         <Card
// //           title="Previous Day Bookings"
// //           content={previousBookings}
// //           color="primary"
// //         />
// //         <Card title="Today's Earnings" content={todayEarnings} color="success" />
// //         <Card
// //           title="Next Day Earnings"
// //           content={nextDayEarnings}
// //           color="warning"
// //         />
// //       </div>
// //       <EarningsList />
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { getEarnings } from './api'; // Assuming you have an API function to fetch earnings

// function Dashboard() {




  
//   const [earnings, setEarnings] = useState({
//     current: null,
//     previous: null,
//     next: null,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchEarnings() {
//       try {
//         const earningsData = await getEarnings(); // Fetch earnings data from API
//         setEarnings(earningsData);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     }

//     fetchEarnings();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (

//           <div className="container">

//         <div >
          
//           <h1>Dashboard</h1>
//      <div className="row mt-4">
//          <Card
//            title="Previous Day Bookings"
//            content={earnings.previous}
//            color="primary"
//          />
//          <Card title="Today's Earnings" content={earnings.current} color="success" />
//          <Card
//            title="Next Day Earnings"
//            content={earnings.next}
//            color="warning"
//          />
//        </div>


       
//         </div>


//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;




// import React from 'react'
// import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Dashboard.css';
// const Dashboard = () => {
//   return (
//     <div>
//       <>
//   {/*
// =========================================================
// * Soft UI Dashboard - v1.0.7
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://www.creative-tim.com/license)
// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */}
//   <meta charSet="utf-8" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1, shrink-to-fit=no"
//   />
//   <link
//     rel="apple-touch-icon"
//     sizes="76x76"
//     href="../assets/img/apple-icon.png"
//   />
//   <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
//   <title>Soft UI Dashboard by Creative Tim</title>
//   {/*     Fonts and icons     */}
//   <link
//     href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
//     rel="stylesheet"
//   />
//   {/* Nucleo Icons */}
//   <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
//   <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
//   {/* Font Awesome Icons */}
//   <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
//   {/* CSS Files */}
//   <link
//     id="pagestyle"
//     href="../assets/css/soft-ui-dashboard.css?v=1.0.7"
//     rel="stylesheet"
//   />
//   {/* Nepcha Analytics (nepcha.com) */}
//   {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
//   <aside
//     className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
//     id="sidenav-main"
//   >
//     <div className="sidenav-header">
//       <i
//         className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
//         aria-hidden="true"
//         id="iconSidenav"
//       />
//       <a
//         className="navbar-brand m-0"
//         href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
//         target="_blank"
//       >
//         <img
//           src="../assets/img/logo-ct-dark.png"
//           className="navbar-brand-img h-100"
//           alt="main_logo"
//         />
//         <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
//       </a>
//     </div>
//     <hr className="horizontal dark mt-0" />
//     <div
//       className="collapse navbar-collapse  w-auto "
//       id="sidenav-collapse-main"
//     >
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link  active" href="../pages/dashboard.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 45 40"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>shop </title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-1716.000000, -439.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(0.000000, 148.000000)">
//                         <path
//                           className="color-background opacity-6"
//                           d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Dashboard</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/tables.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 42 42"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>office</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-1869.000000, -293.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g
//                         id="office"
//                         transform="translate(153.000000, 2.000000)"
//                       >
//                         <path
//                           className="color-background opacity-6"
//                           d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Tables</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/billing.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 43 36"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>credit-card</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-2169.000000, -745.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(453.000000, 454.000000)">
//                         <path
//                           className="color-background opacity-6"
//                           d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Billing</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/virtual-reality.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 42 42"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>box-3d-50</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-2319.000000, -291.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(603.000000, 0.000000)">
//                         <path
//                           className="color-background"
//                           d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Virtual Reality</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/rtl.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 40 40"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>settings</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-2020.000000, -442.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(304.000000, 151.000000)">
//                         <polygon
//                           className="color-background opacity-6"
//                           points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">RTL</span>
//           </a>
//         </li>
//         <li className="nav-item mt-3">
//           <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
//             Account pages
//           </h6>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/profile.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 46 42"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>customer-support</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-1717.000000, -291.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(1.000000, 0.000000)">
//                         <path
//                           className="color-background opacity-6"
//                           d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Profile</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/sign-in.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="12px"
//                 viewBox="0 0 40 44"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>document</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-1870.000000, -591.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(154.000000, 300.000000)">
//                         <path
//                           className="color-background opacity-6"
//                           d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
//                         />
//                         <path
//                           className="color-background"
//                           d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Sign In</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/sign-up.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               <svg
//                 width="12px"
//                 height="20px"
//                 viewBox="0 0 40 40"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//               >
//                 <title>spaceship</title>
//                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//                   <g
//                     transform="translate(-1720.000000, -592.000000)"
//                     fill="#FFFFFF"
//                     fillRule="nonzero"
//                   >
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(4.000000, 301.000000)">
//                         <path
//                           className="color-background"
//                           d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
//                         />
//                         <path
//                           className="color-background opacity-6"
//                           d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <span className="nav-link-text ms-1">Sign Up</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="sidenav-footer mx-3 ">
//       <div
//         className="card card-background shadow-none card-background-mask-secondary"
//         id="sidenavCard"
//       >
//         <div
//           className="full-background"
//           style={{
//             backgroundImage:
//               'url("../assets/img/curved-images/white-curved.jpg")'
//           }}
//         />
//         <div className="card-body text-start p-3 w-100">
//           <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
//             <i
//               className="ni ni-diamond text-dark text-gradient text-lg top-0"
//               aria-hidden="true"
//               id="sidenavCardIcon"
//             />
//           </div>
//           <div className="docs-info">
//             <h6 className="text-white up mb-0">Need help?</h6>
//             <p className="text-xs font-weight-bold">Please check our docs</p>
//             <a
//               href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
//               target="_blank"
//               className="btn btn-white btn-sm w-100 mb-0"
//             >
//               Documentation
//             </a>
//           </div>
//         </div>
//       </div>
//       <a
//         className="btn bg-gradient-primary mt-3 w-100"
//         href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree"
//       >
//         Upgrade to pro
//       </a>
//     </div>
//   </aside>
//   <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
//     {/* Navbar */}
//     <nav
//       className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
//       id="navbarBlur"
//       navbar-scroll="true"
//     >
//       <div className="container-fluid py-1 px-3">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
//             <li className="breadcrumb-item text-sm">
//               <a className="opacity-5 text-dark" href="javascript:;">
//                 Pages
//               </a>
//             </li>
//             <li
//               className="breadcrumb-item text-sm text-dark active"
//               aria-current="page"
//             >
//               Dashboard
//             </li>
//           </ol>
//           <h6 className="font-weight-bolder mb-0">Dashboard</h6>
//         </nav>
//         <div
//           className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
//           id="navbar"
//         >
//           <div className="ms-md-auto pe-md-3 d-flex align-items-center">
//             <div className="input-group">
//               <span className="input-group-text text-body">
//                 <i className="fas fa-search" aria-hidden="true" />
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type here..."
//               />
//             </div>
//           </div>
//           <ul className="navbar-nav  justify-content-end">
//             <li className="nav-item d-flex align-items-center">
//               <a
//                 className="btn btn-outline-primary btn-sm mb-0 me-3"
//                 target="_blank"
//                 href="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard"
//               >
//                 Online Builder
//               </a>
//             </li>
//             <li className="nav-item d-flex align-items-center">
//               <a
//                 href="javascript:;"
//                 className="nav-link text-body font-weight-bold px-0"
//               >
//                 <i className="fa fa-user me-sm-1" />
//                 <span className="d-sm-inline d-none">Sign In</span>
//               </a>
//             </li>
//             <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
//               <a
//                 href="javascript:;"
//                 className="nav-link text-body p-0"
//                 id="iconNavbarSidenav"
//               >
//                 <div className="sidenav-toggler-inner">
//                   <i className="sidenav-toggler-line" />
//                   <i className="sidenav-toggler-line" />
//                   <i className="sidenav-toggler-line" />
//                 </div>
//               </a>
//             </li>
//             <li className="nav-item px-3 d-flex align-items-center">
//               <a href="javascript:;" className="nav-link text-body p-0">
//                 <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
//               </a>
//             </li>
//             <li className="nav-item dropdown pe-2 d-flex align-items-center">
//               <a
//                 href="javascript:;"
//                 className="nav-link text-body p-0"
//                 id="dropdownMenuButton"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="fa fa-bell cursor-pointer" />
//               </a>
//               <ul
//                 className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
//                 aria-labelledby="dropdownMenuButton"
//               >
//                 <li className="mb-2">
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="my-auto">
//                         <img
//                           src="../assets/img/team-2.jpg"
//                           className="avatar avatar-sm  me-3 "
//                         />
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           <span className="font-weight-bold">New message</span>{" "}
//                           from Laur
//                         </h6>
//                         <p className="text-xs text-secondary mb-0 ">
//                           <i className="fa fa-clock me-1" />
//                           13 minutes ago
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="my-auto">
//                         <img
//                           src="../assets/img/small-logos/logo-spotify.svg"
//                           className="avatar avatar-sm bg-gradient-dark  me-3 "
//                         />
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           <span className="font-weight-bold">New album</span> by
//                           Travis Scott
//                         </h6>
//                         <p className="text-xs text-secondary mb-0 ">
//                           <i className="fa fa-clock me-1" />1 day
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
//                         <svg
//                           width="12px"
//                           height="12px"
//                           viewBox="0 0 43 36"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>credit-card</title>
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <g
//                               transform="translate(-2169.000000, -745.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 <g transform="translate(453.000000, 454.000000)">
//                                   <path
//                                     className="color-background"
//                                     d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
//                                     opacity="0.593633743"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
//                                   />
//                                 </g>
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           Payment successfully completed
//                         </h6>
//                         <p className="text-xs text-secondary mb-0 ">
//                           <i className="fa fa-clock me-1" />2 days
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     {/* End Navbar */}
//     <div className="container-fluid py-4">
//       <div className="row">
//         <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
//           <div className="card">
//             <div className="card-body p-3">
//               <div className="row">
//                 <div className="col-8">
//                   <div className="numbers">
//                     <p className="text-sm mb-0 text-capitalize font-weight-bold">
//                       Today's Money
//                     </p>
//                     <h5 className="font-weight-bolder mb-0">
//                       $53,000
//                       <span className="text-success text-sm font-weight-bolder">
//                         +55%
//                       </span>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-4 text-end">
//                   <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
//                     <i
//                       className="ni ni-money-coins text-lg opacity-10"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
//           <div className="card">
//             <div className="card-body p-3">
//               <div className="row">
//                 <div className="col-8">
//                   <div className="numbers">
//                     <p className="text-sm mb-0 text-capitalize font-weight-bold">
//                       Today's Users
//                     </p>
//                     <h5 className="font-weight-bolder mb-0">
//                       2,300
//                       <span className="text-success text-sm font-weight-bolder">
//                         +3%
//                       </span>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-4 text-end">
//                   <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
//                     <i
//                       className="ni ni-world text-lg opacity-10"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
//           <div className="card">
//             <div className="card-body p-3">
//               <div className="row">
//                 <div className="col-8">
//                   <div className="numbers">
//                     <p className="text-sm mb-0 text-capitalize font-weight-bold">
//                       New Clients
//                     </p>
//                     <h5 className="font-weight-bolder mb-0">
//                       +3,462
//                       <span className="text-danger text-sm font-weight-bolder">
//                         -2%
//                       </span>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-4 text-end">
//                   <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
//                     <i
//                       className="ni ni-paper-diploma text-lg opacity-10"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6">
//           <div className="card">
//             <div className="card-body p-3">
//               <div className="row">
//                 <div className="col-8">
//                   <div className="numbers">
//                     <p className="text-sm mb-0 text-capitalize font-weight-bold">
//                       Sales
//                     </p>
//                     <h5 className="font-weight-bolder mb-0">
//                       $103,430
//                       <span className="text-success text-sm font-weight-bolder">
//                         +5%
//                       </span>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-4 text-end">
//                   <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
//                     <i
//                       className="ni ni-cart text-lg opacity-10"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-lg-7 mb-lg-0 mb-4">
//           <div className="card">
//             <div className="card-body p-3">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="d-flex flex-column h-100">
//                     <p className="mb-1 pt-2 text-bold">Built by developers</p>
//                     <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
//                     <p className="mb-5">
//                       From colors, cards, typography to complex elements, you
//                       will find the full documentation.
//                     </p>
//                     <a
//                       className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
//                       href="javascript:;"
//                     >
//                       Read More
//                       <i
//                         className="fas fa-arrow-right text-sm ms-1"
//                         aria-hidden="true"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
//                   <div className="bg-gradient-primary border-radius-lg h-100">
//                     <img
//                       src="../assets/img/shapes/waves-white.svg"
//                       className="position-absolute h-100 w-50 top-0 d-lg-block d-none"
//                       alt="waves"
//                     />
//                     <div className="position-relative d-flex align-items-center justify-content-center h-100">
//                       <img
//                         className="w-100 position-relative z-index-2 pt-4"
//                         src="../assets/img/illustrations/rocket-white.png"
//                         alt="rocket"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-5">
//           <div className="card h-100 p-3">
//             <div
//               className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
//               style={{ backgroundImage: 'url("../assets/img/ivancik.jpg")' }}
//             >
//               <span className="mask bg-gradient-dark" />
//               <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
//                 <h5 className="text-white font-weight-bolder mb-4 pt-2">
//                   Work with the rockets
//                 </h5>
//                 <p className="text-white">
//                   Wealth creation is an evolutionarily recent positive-sum game.
//                   It is all about who take the opportunity first.
//                 </p>
//                 <a
//                   className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
//                   href="javascript:;"
//                 >
//                   Read More
//                   <i
//                     className="fas fa-arrow-right text-sm ms-1"
//                     aria-hidden="true"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-lg-5 mb-lg-0 mb-4">
//           <div className="card z-index-2">
//             <div className="card-body p-3">
//               <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
//                 <div className="chart">
//                   <canvas
//                     id="chart-bars"
//                     className="chart-canvas"
//                     height={170}
//                   />
//                 </div>
//               </div>
//               <h6 className="ms-2 mt-4 mb-0"> Active Users </h6>
//               <p className="text-sm ms-2">
//                 {" "}
//                 (<span className="font-weight-bolder">+23%</span>) than last
//                 week{" "}
//               </p>
//               <div className="container border-radius-lg">
//                 <div className="row">
//                   <div className="col-3 py-3 ps-0">
//                     <div className="d-flex mb-2">
//                       <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
//                         <svg
//                           width="10px"
//                           height="10px"
//                           viewBox="0 0 40 44"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>document</title>
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <g
//                               transform="translate(-1870.000000, -591.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 <g transform="translate(154.000000, 300.000000)">
//                                   <path
//                                     className="color-background"
//                                     d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
//                                     opacity="0.603585379"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
//                                   />
//                                 </g>
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <p className="text-xs mt-1 mb-0 font-weight-bold">
//                         Users
//                       </p>
//                     </div>
//                     <h4 className="font-weight-bolder">36K</h4>
//                     <div className="progress w-75">
//                       <div
//                         className="progress-bar bg-dark w-60"
//                         role="progressbar"
//                         aria-valuenow={60}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-3 py-3 ps-0">
//                     <div className="d-flex mb-2">
//                       <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center">
//                         <svg
//                           width="10px"
//                           height="10px"
//                           viewBox="0 0 40 40"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>spaceship</title>
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <g
//                               transform="translate(-1720.000000, -592.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 <g transform="translate(4.000000, 301.000000)">
//                                   <path
//                                     className="color-background"
//                                     d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
//                                     opacity="0.598539807"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
//                                     opacity="0.598539807"
//                                   />
//                                 </g>
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <p className="text-xs mt-1 mb-0 font-weight-bold">
//                         Clicks
//                       </p>
//                     </div>
//                     <h4 className="font-weight-bolder">2m</h4>
//                     <div className="progress w-75">
//                       <div
//                         className="progress-bar bg-dark w-90"
//                         role="progressbar"
//                         aria-valuenow={90}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-3 py-3 ps-0">
//                     <div className="d-flex mb-2">
//                       <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center">
//                         <svg
//                           width="10px"
//                           height="10px"
//                           viewBox="0 0 43 36"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>credit-card</title>
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <g
//                               transform="translate(-2169.000000, -745.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 <g transform="translate(453.000000, 454.000000)">
//                                   <path
//                                     className="color-background"
//                                     d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
//                                     opacity="0.593633743"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
//                                   />
//                                 </g>
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <p className="text-xs mt-1 mb-0 font-weight-bold">
//                         Sales
//                       </p>
//                     </div>
//                     <h4 className="font-weight-bolder">435$</h4>
//                     <div className="progress w-75">
//                       <div
//                         className="progress-bar bg-dark w-30"
//                         role="progressbar"
//                         aria-valuenow={30}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-3 py-3 ps-0">
//                     <div className="d-flex mb-2">
//                       <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center">
//                         <svg
//                           width="10px"
//                           height="10px"
//                           viewBox="0 0 40 40"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           <title>settings</title>
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             <g
//                               transform="translate(-2020.000000, -442.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 <g transform="translate(304.000000, 151.000000)">
//                                   <polygon
//                                     className="color-background"
//                                     opacity="0.596981957"
//                                     points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
//                                     opacity="0.596981957"
//                                   />
//                                   <path
//                                     className="color-background"
//                                     d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
//                                   />
//                                 </g>
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <p className="text-xs mt-1 mb-0 font-weight-bold">
//                         Items
//                       </p>
//                     </div>
//                     <h4 className="font-weight-bolder">43</h4>
//                     <div className="progress w-75">
//                       <div
//                         className="progress-bar bg-dark w-50"
//                         role="progressbar"
//                         aria-valuenow={50}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-7">
//           <div className="card z-index-2">
//             <div className="card-header pb-0">
//               <h6>Sales overview</h6>
//               <p className="text-sm">
//                 <i className="fa fa-arrow-up text-success" />
//                 <span className="font-weight-bold">4% more</span> in 2021
//               </p>
//             </div>
//             <div className="card-body p-3">
//               <div className="chart">
//                 <canvas id="chart-line" className="chart-canvas" height={300} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row my-4">
//         <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
//           <div className="card">
//             <div className="card-header pb-0">
//               <div className="row">
//                 <div className="col-lg-6 col-7">
//                   <h6>Projects</h6>
//                   <p className="text-sm mb-0">
//                     <i className="fa fa-check text-info" aria-hidden="true" />
//                     <span className="font-weight-bold ms-1">30 done</span> this
//                     month
//                   </p>
//                 </div>
//                 <div className="col-lg-6 col-5 my-auto text-end">
//                   <div className="dropdown float-lg-end pe-4">
//                     <a
//                       className="cursor-pointer"
//                       id="dropdownTable"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <i className="fa fa-ellipsis-v text-secondary" />
//                     </a>
//                     <ul
//                       className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
//                       aria-labelledby="dropdownTable"
//                     >
//                       <li>
//                         <a
//                           className="dropdown-item border-radius-md"
//                           href="javascript:;"
//                         >
//                           Action
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="dropdown-item border-radius-md"
//                           href="javascript:;"
//                         >
//                           Another action
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="dropdown-item border-radius-md"
//                           href="javascript:;"
//                         >
//                           Something else here
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card-body px-0 pb-2">
//               <div className="table-responsive">
//                 <table className="table align-items-center mb-0">
//                   <thead>
//                     <tr>
//                       <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
//                         Companies
//                       </th>
//                       <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
//                         Members
//                       </th>
//                       <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
//                         Budget
//                       </th>
//                       <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
//                         Completion
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-xd.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="xd"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">Soft UI XD Version</h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Ryan Tompson"
//                           >
//                             <img src="../assets/img/team-1.jpg" alt="team1" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Romina Hadid"
//                           >
//                             <img src="../assets/img/team-2.jpg" alt="team2" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Alexander Smith"
//                           >
//                             <img src="../assets/img/team-3.jpg" alt="team3" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Jessica Doe"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="team4" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold">
//                           {" "}
//                           $14,000{" "}
//                         </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 60%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-info w-60"
//                               role="progressbar"
//                               aria-valuenow={60}
//                               aria-valuemin={0}
//                               aria-valuemax={100}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-atlassian.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="atlassian"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">Add Progress Track</h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Romina Hadid"
//                           >
//                             <img src="../assets/img/team-2.jpg" alt="team5" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Jessica Doe"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="team6" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold">
//                           {" "}
//                           $3,000{" "}
//                         </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 10%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-info w-10"
//                               role="progressbar"
//                               aria-valuenow={10}
//                               aria-valuemin={0}
//                               aria-valuemax={100}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-slack.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="team7"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">
//                               Fix Platform Errors
//                             </h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Romina Hadid"
//                           >
//                             <img src="../assets/img/team-3.jpg" alt="team8" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Jessica Doe"
//                           >
//                             <img src="../assets/img/team-1.jpg" alt="team9" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold">
//                           {" "}
//                           Not set{" "}
//                         </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 100%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-success w-100"
//                               role="progressbar"
//                               aria-valuenow={100}
//                               aria-valuemin={0}
//                               aria-valuemax={100}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-spotify.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="spotify"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">
//                               Launch our Mobile App
//                             </h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Ryan Tompson"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="user1" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Romina Hadid"
//                           >
//                             <img src="../assets/img/team-3.jpg" alt="user2" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Alexander Smith"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="user3" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Jessica Doe"
//                           >
//                             <img src="../assets/img/team-1.jpg" alt="user4" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold">
//                           {" "}
//                           $20,500{" "}
//                         </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 100%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-success w-100"
//                               role="progressbar"
//                               aria-valuenow={100}
//                               aria-valuemin={0}
//                               aria-valuemax={100}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-jira.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="jira"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">
//                               Add the New Pricing Page
//                             </h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Ryan Tompson"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="user5" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold"> $500 </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 25%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-info w-25"
//                               role="progressbar"
//                               aria-valuenow={25}
//                               aria-valuemin={0}
//                               aria-valuemax={25}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="d-flex px-2 py-1">
//                           <div>
//                             <img
//                               src="../assets/img/small-logos/logo-invision.svg"
//                               className="avatar avatar-sm me-3"
//                               alt="invision"
//                             />
//                           </div>
//                           <div className="d-flex flex-column justify-content-center">
//                             <h6 className="mb-0 text-sm">
//                               Redesign New Online Shop
//                             </h6>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="avatar-group mt-2">
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Ryan Tompson"
//                           >
//                             <img src="../assets/img/team-1.jpg" alt="user6" />
//                           </a>
//                           <a
//                             href="javascript:;"
//                             className="avatar avatar-xs rounded-circle"
//                             data-bs-toggle="tooltip"
//                             data-bs-placement="bottom"
//                             title="Jessica Doe"
//                           >
//                             <img src="../assets/img/team-4.jpg" alt="user7" />
//                           </a>
//                         </div>
//                       </td>
//                       <td className="align-middle text-center text-sm">
//                         <span className="text-xs font-weight-bold">
//                           {" "}
//                           $2,000{" "}
//                         </span>
//                       </td>
//                       <td className="align-middle">
//                         <div className="progress-wrapper w-75 mx-auto">
//                           <div className="progress-info">
//                             <div className="progress-percentage">
//                               <span className="text-xs font-weight-bold">
//                                 40%
//                               </span>
//                             </div>
//                           </div>
//                           <div className="progress">
//                             <div
//                               className="progress-bar bg-gradient-info w-40"
//                               role="progressbar"
//                               aria-valuenow={40}
//                               aria-valuemin={0}
//                               aria-valuemax={40}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="card h-100">
//             <div className="card-header pb-0">
//               <h6>Orders overview</h6>
//               <p className="text-sm">
//                 <i className="fa fa-arrow-up text-success" aria-hidden="true" />
//                 <span className="font-weight-bold">24%</span> this month
//               </p>
//             </div>
//             <div className="card-body p-3">
//               <div className="timeline timeline-one-side">
//                 <div className="timeline-block mb-3">
//                   <span className="timeline-step">
//                     <i className="ni ni-bell-55 text-success text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       $2400, Design changes
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       22 DEC 7:20 PM
//                     </p>
//                   </div>
//                 </div>
//                 <div className="timeline-block mb-3">
//                   <span className="timeline-step">
//                     <i className="ni ni-html5 text-danger text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       New order #1832412
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       21 DEC 11 PM
//                     </p>
//                   </div>
//                 </div>
//                 <div className="timeline-block mb-3">
//                   <span className="timeline-step">
//                     <i className="ni ni-cart text-info text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       Server payments for April
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       21 DEC 9:34 PM
//                     </p>
//                   </div>
//                 </div>
//                 <div className="timeline-block mb-3">
//                   <span className="timeline-step">
//                     <i className="ni ni-credit-card text-warning text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       New card added for order #4395133
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       20 DEC 2:20 AM
//                     </p>
//                   </div>
//                 </div>
//                 <div className="timeline-block mb-3">
//                   <span className="timeline-step">
//                     <i className="ni ni-key-25 text-primary text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       Unlock packages for development
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       18 DEC 4:54 AM
//                     </p>
//                   </div>
//                 </div>
//                 <div className="timeline-block">
//                   <span className="timeline-step">
//                     <i className="ni ni-money-coins text-dark text-gradient" />
//                   </span>
//                   <div className="timeline-content">
//                     <h6 className="text-dark text-sm font-weight-bold mb-0">
//                       New order #9583120
//                     </h6>
//                     <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
//                       17 DEC
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer className="footer pt-3  ">
//         <div className="container-fluid">
//           <div className="row align-items-center justify-content-lg-between">
//             <div className="col-lg-6 mb-lg-0 mb-4">
//               <div className="copyright text-center text-sm text-muted text-lg-start">
//                 © , made with <i className="fa fa-heart" /> by
//                 <a
//                   href="https://www.creative-tim.com"
//                   className="font-weight-bold"
//                   target="_blank"
//                 >
//                   Creative Tim
//                 </a>
//                 for a better web.
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <ul className="nav nav-footer justify-content-center justify-content-lg-end">
//                 <li className="nav-item">
//                   <a
//                     href="https://www.creative-tim.com"
//                     className="nav-link text-muted"
//                     target="_blank"
//                   >
//                     Creative Tim
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     href="https://www.creative-tim.com/presentation"
//                     className="nav-link text-muted"
//                     target="_blank"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     href="https://www.creative-tim.com/blog"
//                     className="nav-link text-muted"
//                     target="_blank"
//                   >
//                     Blog
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     href="https://www.creative-tim.com/license"
//                     className="nav-link pe-0 text-muted"
//                     target="_blank"
//                   >
//                     License
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   </main>
//   <div className="fixed-plugin">
//     <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
//       <i className="fa fa-cog py-2"> </i>
//     </a>
//     <div className="card shadow-lg ">
//       <div className="card-header pb-0 pt-3 ">
//         <div className="float-start">
//           <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
//           <p>See our dashboard options.</p>
//         </div>
//         <div className="float-end mt-4">
//           <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
//             <i className="fa fa-close" />
//           </button>
//         </div>
//         {/* End Toggle Button */}
//       </div>
//       <hr className="horizontal dark my-1" />
//       <div className="card-body pt-sm-3 pt-0">
//         {/* Sidebar Backgrounds */}
//         <div>
//           <h6 className="mb-0">Sidebar Colors</h6>
//         </div>
//         <a
//           href="javascript:void(0)"
//           className="switch-trigger background-color"
//         >
//           <div className="badge-colors my-2 text-start">
//             <span
//               className="badge filter bg-gradient-primary active"
//               data-color="primary"
//               onclick="sidebarColor(this)"
//             />
//             <span
//               className="badge filter bg-gradient-dark"
//               data-color="dark"
//               onclick="sidebarColor(this)"
//             />
//             <span
//               className="badge filter bg-gradient-info"
//               data-color="info"
//               onclick="sidebarColor(this)"
//             />
//             <span
//               className="badge filter bg-gradient-success"
//               data-color="success"
//               onclick="sidebarColor(this)"
//             />
//             <span
//               className="badge filter bg-gradient-warning"
//               data-color="warning"
//               onclick="sidebarColor(this)"
//             />
//             <span
//               className="badge filter bg-gradient-danger"
//               data-color="danger"
//               onclick="sidebarColor(this)"
//             />
//           </div>
//         </a>
//         {/* Sidenav Type */}
//         <div className="mt-3">
//           <h6 className="mb-0">Sidenav Type</h6>
//           <p className="text-sm">Choose between 2 different sidenav types.</p>
//         </div>
//         <div className="d-flex">
//           <button
//             className="btn bg-gradient-primary w-100 px-3 mb-2 active"
//             data-class="bg-transparent"
//             onclick="sidebarType(this)"
//           >
//             Transparent
//           </button>
//           <button
//             className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
//             data-class="bg-white"
//             onclick="sidebarType(this)"
//           >
//             White
//           </button>
//         </div>
//         <p className="text-sm d-xl-none d-block mt-2">
//           You can change the sidenav type just on desktop view.
//         </p>
//         {/* Navbar Fixed */}
//         <div className="mt-3">
//           <h6 className="mb-0">Navbar Fixed</h6>
//         </div>
//         <div className="form-check form-switch ps-0">
//           <input
//             className="form-check-input mt-1 ms-auto"
//             type="checkbox"
//             id="navbarFixed"
//             onclick="navbarFixed(this)"
//           />
//         </div>
//         <hr className="horizontal dark my-sm-4" />
//         <a
//           className="btn bg-gradient-dark w-100"
//           href="https://www.creative-tim.com/product/soft-ui-dashboard"
//         >
//           Free Download
//         </a>
//         <a
//           className="btn btn-outline-dark w-100"
//           href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
//         >
//           View documentation
//         </a>
//         <div className="w-100 text-center">
//           <a
//             className="github-button"
//             href="https://github.com/creativetimofficial/soft-ui-dashboard"
//             data-icon="octicon-star"
//             data-size="large"
//             data-show-count="true"
//             aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
//           >
//             Star
//           </a>
//           <h6 className="mt-3">Thank you for sharing!</h6>
//           <a
//             href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
//             className="btn btn-dark mb-0 me-2"
//             target="_blank"
//           >
//             <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
//           </a>
//           <a
//             href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
//             className="btn btn-dark mb-0 me-2"
//             target="_blank"
//           >
//             <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
//             Share
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/*   Core JS Files   */}
//   {/* Github buttons */}
//   {/* Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc */}
// </>

//     </div>
//   )
// }

// export default Dashboard
