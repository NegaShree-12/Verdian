import * as React from "react";
const Globe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={104}
    height={104}
    viewBox="0 0 104 104"
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path d="M51.787 5C38.293 5 27.26 15.923 26.862 29.454a3.47 3.47 0 0 0 .004 1.513c.405 13.528 11.43 24.446 24.92 24.446 13.746 0 24.961-11.326 24.961-25.207C76.747 16.326 65.532 5 51.787 5Zm0 6.874c.169 0 .309-.027.873.65.564.676 1.273 2.013 1.848 3.786.865 2.668 1.13 6.64 1.37 10.46h-8.182c.24-3.82.504-7.792 1.37-10.46.574-1.773 1.283-3.11 1.848-3.787.564-.676.704-.649.873-.649Zm-9.267 2.57c-1.134 3.623-1.657 7.92-1.87 12.325h-6.688a18.242 18.242 0 0 1 8.557-12.326Zm18.534 0a18.242 18.242 0 0 1 8.558 12.325h-6.688c-.214-4.406-.736-8.702-1.87-12.326Zm31.081 18.05c-2.17 0-4.33.868-5.81 2.39-1.48 1.52-2.28 3.517-2.588 5.63-.291 1.987-1.097 7.615-1.889 13.122-.894-.31-1.823-.492-2.76-.492a8.372 8.372 0 0 0-5.966 2.47v.005l-5.212 5.258c-3.166 3.197-5.28 4.357-7.406 5.402-2.125 1.046-4.604 2.045-7.055 4.52-.627.634-1.165 1.329-1.662 2.05-.498-.723-1.034-1.42-1.662-2.054-2.452-2.476-4.93-3.47-7.056-4.516-2.125-1.045-4.24-2.205-7.406-5.402l-5.212-5.263a8.372 8.372 0 0 0-5.965-2.47c-.937 0-1.867.184-2.761.492-.791-5.508-1.598-11.135-1.888-13.122-.309-2.113-1.108-4.105-2.588-5.626-1.48-1.522-3.64-2.39-5.81-2.39-4.075 0-7.367 3.055-8.124 6.964-.195.428-.301.893-.31 1.365l-.005.13h.013c0 .022-.013.04-.013.062.002.153.014.306.035.457 1.006 11.743 1.43 19.266 2.026 24.4.604 5.196 1.51 8.628 3.97 11.113 4.764 4.813 8.546 7.858 12.162 10.92 4.452 3.77 4.498 6.411 4.498 7.605a3.467 3.467 0 0 0 .98 2.462 3.375 3.375 0 0 0 4.848 0 3.442 3.442 0 0 0 .98-2.462c0-2.592-1.1-7.934-6.932-12.872-3.703-3.137-7.215-5.96-11.722-10.513-.893-.902-1.47-2.277-2.026-7.053-.546-4.699-.982-12.349-1.985-24.083.022-.926.68-1.62 1.604-1.62.61 0 .732.098.958.33.226.233.552.78.704 1.818.456 3.115 3.027 21.017 3.027 21.017.015.119.036.237.062.353.254 1.752 1.012 3.438 2.332 4.771l8.3 8.388c.314.33.69.593 1.106.774a3.377 3.377 0 0 0 3.757-.724 3.467 3.467 0 0 0-.05-4.91l-8.3-8.388a1.649 1.649 0 0 1-.43-.828 3.47 3.47 0 0 0-.04-.42l-.005-.041c.031-.37.176-.736.475-1.038.664-.671 1.637-.67 2.304.004l5.208 5.259c3.707 3.744 6.843 5.543 9.24 6.722 2.398 1.179 3.713 1.668 5.226 3.196 2.041 2.061 3.049 5.089 3.049 10.593 0 5.14.022 9.215.022 9.247v.036l.004.071c0 .09.003.18.01.269a3.462 3.462 0 0 0 .049.345c.022.111.05.222.083.33.03.102.064.202.102.3.024.056.049.112.075.166.024.056.05.111.076.166l.026.044c.048.086.1.17.156.251l.008.018a3.447 3.447 0 0 0 .483.564c.063.062.128.122.196.179.088.072.18.139.274.201.086.058.175.112.266.161.054.027.109.053.164.077a3.346 3.346 0 0 0 .492.192h.005l.013.005a3.387 3.387 0 0 0 .616.111h.009c.085.007.171.01.257.01l.11.004c.048-.002.095-.005.142-.01a3.329 3.329 0 0 0 .2-.013l.053-.008c.095-.014.19-.032.284-.054.11-.025.22-.054.328-.09l.013-.004a3.376 3.376 0 0 0 .607-.278c.087-.05.17-.103.253-.16l.03-.023a3.84 3.84 0 0 0 .058-.05c.072-.052.141-.107.209-.165a3.43 3.43 0 0 0 .243-.242c.077-.081.15-.166.218-.255l.004-.004.013-.018c.063-.087.123-.177.178-.269a3.394 3.394 0 0 0 .283-.582l.014-.035a3.459 3.459 0 0 0 .181-.833 3.51 3.51 0 0 0 .018-.174c.003-.064.005-.129.004-.193v-.04c0-.036.023-4.11.023-9.247 0-5.504 1.007-8.527 3.049-10.589 1.512-1.527 2.828-2.021 5.225-3.2 2.397-1.179 5.533-2.978 9.24-6.722l5.208-5.259c.668-.673 1.64-.67 2.305 0 .297.301.442.665.474 1.034l-.005.036a3.48 3.48 0 0 0-.04.438 1.654 1.654 0 0 1-.43.82l-8.3 8.382a3.438 3.438 0 0 0-1.047 2.445 3.467 3.467 0 0 0 .997 2.466 3.402 3.402 0 0 0 2.442 1.006 3.377 3.377 0 0 0 2.42-1.056l8.302-8.383c1.327-1.34 2.087-3.04 2.335-4.802a3.5 3.5 0 0 0 .058-.332s2.572-17.901 3.027-21.017c.152-1.038.479-1.58.705-1.813.225-.232.348-.335.957-.335.927 0 1.59.695 1.609 1.624-1.003 11.735-1.444 19.385-1.99 24.084-.555 4.776-1.133 6.151-2.026 7.053-4.506 4.553-8.018 7.376-11.722 10.513-5.832 4.938-6.932 10.28-6.932 12.872a3.467 3.467 0 0 0 .98 2.462A3.402 3.402 0 0 0 74.478 99a3.375 3.375 0 0 0 2.424-1.024 3.442 3.442 0 0 0 .98-2.462c0-1.194.046-3.834 4.498-7.604 3.616-3.063 7.398-6.108 12.162-10.92 2.46-2.486 3.367-5.918 3.97-11.113.597-5.135 1.02-12.658 2.026-24.401.022-.153.034-.307.035-.461 0-.022-.013-.04-.013-.063h.013l-.004-.125a3.464 3.464 0 0 0-.31-1.374c-.76-3.906-4.052-6.96-8.124-6.96Zm-58.174 1.15h6.688c.214 4.406.737 8.702 1.87 12.325a18.242 18.242 0 0 1-8.557-12.325Zm13.735 0h8.181c-.24 3.818-.504 7.79-1.37 10.459-.574 1.773-1.283 3.11-1.847 3.786-.564.677-.704.65-.873.65-.17 0-.31.027-.873-.65-.565-.676-1.274-2.014-1.849-3.786-.865-2.668-1.13-6.641-1.369-10.46Zm15.228 0h6.688a18.242 18.242 0 0 1-8.558 12.325c1.134-3.623 1.656-7.92 1.87-12.325Z" />
    </mask>
    <path
      fill="#F3A31B"
      stroke="#fff"
      strokeWidth={2.4}
      d="M51.787 5C38.293 5 27.26 15.923 26.862 29.454a3.47 3.47 0 0 0 .004 1.513c.405 13.528 11.43 24.446 24.92 24.446 13.746 0 24.961-11.326 24.961-25.207C76.747 16.326 65.532 5 51.787 5Zm0 6.874c.169 0 .309-.027.873.65.564.676 1.273 2.013 1.848 3.786.865 2.668 1.13 6.64 1.37 10.46h-8.182c.24-3.82.504-7.792 1.37-10.46.574-1.773 1.283-3.11 1.848-3.787.564-.676.704-.649.873-.649Zm-9.267 2.57c-1.134 3.623-1.657 7.92-1.87 12.325h-6.688a18.242 18.242 0 0 1 8.557-12.326Zm18.534 0a18.242 18.242 0 0 1 8.558 12.325h-6.688c-.214-4.406-.736-8.702-1.87-12.326Zm31.081 18.05c-2.17 0-4.33.868-5.81 2.39-1.48 1.52-2.28 3.517-2.588 5.63-.291 1.987-1.097 7.615-1.889 13.122-.894-.31-1.823-.492-2.76-.492a8.372 8.372 0 0 0-5.966 2.47v.005l-5.212 5.258c-3.166 3.197-5.28 4.357-7.406 5.402-2.125 1.046-4.604 2.045-7.055 4.52-.627.634-1.165 1.329-1.662 2.05-.498-.723-1.034-1.42-1.662-2.054-2.452-2.476-4.93-3.47-7.056-4.516-2.125-1.045-4.24-2.205-7.406-5.402l-5.212-5.263a8.372 8.372 0 0 0-5.965-2.47c-.937 0-1.867.184-2.761.492-.791-5.508-1.598-11.135-1.888-13.122-.309-2.113-1.108-4.105-2.588-5.626-1.48-1.522-3.64-2.39-5.81-2.39-4.075 0-7.367 3.055-8.124 6.964-.195.428-.301.893-.31 1.365l-.005.13h.013c0 .022-.013.04-.013.062.002.153.014.306.035.457 1.006 11.743 1.43 19.266 2.026 24.4.604 5.196 1.51 8.628 3.97 11.113 4.764 4.813 8.546 7.858 12.162 10.92 4.452 3.77 4.498 6.411 4.498 7.605a3.467 3.467 0 0 0 .98 2.462 3.375 3.375 0 0 0 4.848 0 3.442 3.442 0 0 0 .98-2.462c0-2.592-1.1-7.934-6.932-12.872-3.703-3.137-7.215-5.96-11.722-10.513-.893-.902-1.47-2.277-2.026-7.053-.546-4.699-.982-12.349-1.985-24.083.022-.926.68-1.62 1.604-1.62.61 0 .732.098.958.33.226.233.552.78.704 1.818.456 3.115 3.027 21.017 3.027 21.017.015.119.036.237.062.353.254 1.752 1.012 3.438 2.332 4.771l8.3 8.388c.314.33.69.593 1.106.774a3.377 3.377 0 0 0 3.757-.724 3.467 3.467 0 0 0-.05-4.91l-8.3-8.388a1.649 1.649 0 0 1-.43-.828 3.47 3.47 0 0 0-.04-.42l-.005-.041c.031-.37.176-.736.475-1.038.664-.671 1.637-.67 2.304.004l5.208 5.259c3.707 3.744 6.843 5.543 9.24 6.722 2.398 1.179 3.713 1.668 5.226 3.196 2.041 2.061 3.049 5.089 3.049 10.593 0 5.14.022 9.215.022 9.247v.036l.004.071c0 .09.003.18.01.269a3.462 3.462 0 0 0 .049.345c.022.111.05.222.083.33.03.102.064.202.102.3.024.056.049.112.075.166.024.056.05.111.076.166l.026.044c.048.086.1.17.156.251l.008.018a3.447 3.447 0 0 0 .483.564c.063.062.128.122.196.179.088.072.18.139.274.201.086.058.175.112.266.161.054.027.109.053.164.077a3.346 3.346 0 0 0 .492.192h.005l.013.005a3.387 3.387 0 0 0 .616.111h.009c.085.007.171.01.257.01l.11.004c.048-.002.095-.005.142-.01a3.329 3.329 0 0 0 .2-.013l.053-.008c.095-.014.19-.032.284-.054.11-.025.22-.054.328-.09l.013-.004a3.376 3.376 0 0 0 .607-.278c.087-.05.17-.103.253-.16l.03-.023a3.84 3.84 0 0 0 .058-.05c.072-.052.141-.107.209-.165a3.43 3.43 0 0 0 .243-.242c.077-.081.15-.166.218-.255l.004-.004.013-.018c.063-.087.123-.177.178-.269a3.394 3.394 0 0 0 .283-.582l.014-.035a3.459 3.459 0 0 0 .181-.833 3.51 3.51 0 0 0 .018-.174c.003-.064.005-.129.004-.193v-.04c0-.036.023-4.11.023-9.247 0-5.504 1.007-8.527 3.049-10.589 1.512-1.527 2.828-2.021 5.225-3.2 2.397-1.179 5.533-2.978 9.24-6.722l5.208-5.259c.668-.673 1.64-.67 2.305 0 .297.301.442.665.474 1.034l-.005.036a3.48 3.48 0 0 0-.04.438 1.654 1.654 0 0 1-.43.82l-8.3 8.382a3.438 3.438 0 0 0-1.047 2.445 3.467 3.467 0 0 0 .997 2.466 3.402 3.402 0 0 0 2.442 1.006 3.377 3.377 0 0 0 2.42-1.056l8.302-8.383c1.327-1.34 2.087-3.04 2.335-4.802a3.5 3.5 0 0 0 .058-.332s2.572-17.901 3.027-21.017c.152-1.038.479-1.58.705-1.813.225-.232.348-.335.957-.335.927 0 1.59.695 1.609 1.624-1.003 11.735-1.444 19.385-1.99 24.084-.555 4.776-1.133 6.151-2.026 7.053-4.506 4.553-8.018 7.376-11.722 10.513-5.832 4.938-6.932 10.28-6.932 12.872a3.467 3.467 0 0 0 .98 2.462A3.402 3.402 0 0 0 74.478 99a3.375 3.375 0 0 0 2.424-1.024 3.442 3.442 0 0 0 .98-2.462c0-1.194.046-3.834 4.498-7.604 3.616-3.063 7.398-6.108 12.162-10.92 2.46-2.486 3.367-5.918 3.97-11.113.597-5.135 1.02-12.658 2.026-24.401.022-.153.034-.307.035-.461 0-.022-.013-.04-.013-.063h.013l-.004-.125a3.464 3.464 0 0 0-.31-1.374c-.76-3.906-4.052-6.96-8.124-6.96Zm-58.174 1.15h6.688c.214 4.406.737 8.702 1.87 12.325a18.242 18.242 0 0 1-8.557-12.325Zm13.735 0h8.181c-.24 3.818-.504 7.79-1.37 10.459-.574 1.773-1.283 3.11-1.847 3.786-.564.677-.704.65-.873.65-.17 0-.31.027-.873-.65-.565-.676-1.274-2.014-1.849-3.786-.865-2.668-1.13-6.641-1.369-10.46Zm15.228 0h6.688a18.242 18.242 0 0 1-8.558 12.325c1.134-3.623 1.656-7.92 1.87-12.325Z"
      mask="url(#a)"
    />
  </svg>
);
export default Globe;
