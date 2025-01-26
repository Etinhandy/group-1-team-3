 /* // storing variables
  const hamburger= document.querySelector(".chinedu-hamburger");
  const navMenu= document.querySelector(".chinedu-nav-menu");

//    hamburger toggling function
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})
// activating the nav menu with the hamburger
document.querySelectorAll(".chinedu-nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active")
navMenu.classList.remove("active")
}))


// Highliting active current page on navigation menu

document.addEventListener('DOMContentLoaded', function() {
    const selector = '.chinedu-nav-link';
    const elems = Array.from( document.querySelectorAll( selector ) );
    const navigation = document.querySelector( 'nav' );
    
    function makeActive( evt ) {
      const target = evt.target;
      
      if ( !target || !target.matches( selector ) ) {
        return;
      }
      
      elems.forEach( elem => elem.classList.remove( 'active' ) );
        
        evt.target.classList.add( 'active' );
    };
    
    navigation.addEventListener( 'mousedown', makeActive );
    
    } );
    */


    // Storing variables
    
const hamburger = document.querySelector(".chinedu-hamburger");
const navMenu = document.querySelector(".chinedu-nav-menu");
const navLinks = document.querySelectorAll(".chinedu-nav-link");
const body = document.body; // Access the body element

// Hamburger toggling function
hamburger.addEventListener("click", () => {
  const isActive = hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.style.overflow = isActive ? "hidden" : ""; // Disable/enable scrolling
});

// Close menu when a navigation link is clicked
navLinks.forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.style.overflow = ""; // Re-enable scrolling
  })
);

// Highlight active page in the navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const selector = ".chinedu-nav-link";
  const elems = Array.from(document.querySelectorAll(selector));
  const navigation = document.querySelector("nav");

  // Apply saved active link on page load
  const savedActiveLink = localStorage.getItem("activeLink");
  if (savedActiveLink) {
    elems.forEach(link => link.classList.remove("active"));
    const activeLink = document.querySelector(`[href='${savedActiveLink}']`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Update active link on click
  function makeActive(evt) {
    const target = evt.target;
    if (!target || !target.matches(selector)) return;

    elems.forEach(elem => elem.classList.remove("active"));
    target.classList.add("active");

    // Save the active link to localStorage
    const href = target.getAttribute("href");
    if (href) {
      localStorage.setItem("activeLink", href);
    }
  }

  navigation.addEventListener("click", makeActive);
});
