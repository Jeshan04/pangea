// Function to create the header component
function createHeader() {
  const headerHTML = `
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="Pangea" style="height: 75px;">
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section"><a href="./index.html">Home</a></li>
                <li class="scroll-to-section"><a href="./about.html">About Us</a></li>
                <li class="scroll-to-section"><a href="./fellows.html">Fellows</a></li>
                <li class="scroll-to-section"><a href="./news.html">News and Blogs</a></li>
                <li class="scroll-to-section"><a href="./partnership.html">Partnership & Vision</a></li>
                <li></li>
              </ul>        
              <a class='menu-trigger'>
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
  `;

  // Append header to the body or any target element
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Function to create the footer component
function createFooter() {
  const footerHTML = `
    <style>
      /* Default footer text color */
      footer {
        color: inherit;
      }

      /* Mobile-specific styles */
      @media only screen and (max-width: 767px) {
        footer {
          color: black;
        }
        .footer-widget h4, 
        .footer-widget p, 
        .footer-widget a {
          color: black; /* Ensure all footer text elements are black */
        }
          /* CSS for desktop */
.main-nav ul {
  display: flex;
  list-style: none;
}

.main-nav .menu-trigger {
  display: none;
}

/* CSS for mobile */
@media only screen and (max-width: 767px) {
  .main-nav ul {
    display: none;
    flex-direction: column;
  }

  .main-nav .menu-trigger {
    display: block;
    cursor: pointer;
  }

  .main-nav ul.active {
    display: flex;
  }

  .main-nav ul li {
    margin-bottom: 10px;
  }
}

      }
    </style>
    <footer id="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="section-heading">
              <h4>Pangea Society</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="footer-widget">
              <h4>Contact Us</h4>
              <p>ONE WORLD CENTER, BUILDING-2A, 7th floor, Senapati Bapat Marg, Lower Parel, Mumbai, 400013</p>
              <p><a href="#">Phone Number: +91 9266877409</a></p>
              <p><a href="#">Email: connect@pangeasociety.org</a></p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-widget">
              <h4>About Us</h4>
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./partnership.html">Partnership</a></li>
                <li><a href="./news.html">News</a></li>
                <li><a href="./fellow.html">Fellows</a></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-widget">
              <h4>About Our Company</h4>
              <div class="logo">
                <img src="assets/images/logo.png" alt="">
              </div>
              <p>We envision a world where research and academia are not isolated in theoretical frameworks but are actively engaged in solving contemporary issues.</p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="copyright-text">
              <p>Copyright © 2024 Pangea. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Append footer to the body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}



document.addEventListener("DOMContentLoaded", function () {
  createHeader();
  createFooter();

  // Get the menu trigger and the nav
  const menuTrigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.main-nav ul');

  // Toggle menu on click
  menuTrigger.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});
