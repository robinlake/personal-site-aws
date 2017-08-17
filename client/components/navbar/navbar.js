import React, { Component } from 'react';
import $ from 'jquery';

export class MainNavbar extends Component {
  constructor(props){
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  // Scroll event vanilla Javascript function
  scrollEvent(input){
    let scrollFinal = document.querySelector(input).offsetTop;
    let body = document.body;
    let scrollRemaining = (scrollFinal - body.scrollTop);
    let windowHeight = window.innerHeight;
    let pageHeight = window.scrollHeight;
    console.log(windowHeight);

    // Scroll down if not at correct position
    function scrollDown(){
      if (scrollRemaining > 10){
        body.scrollTop += (scrollRemaining/20 + 10);
        scrollRemaining = (scrollFinal - body.scrollTop);
        console.log(windowHeight);
        console.log(scrollRemaining);
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
          clear();
        }
      } else if(scrollRemaining <= 10 && scrollRemaining >= 0){
        body.scrollTop += scrollRemaining;
        scrollRemaining = (scrollFinal - body.scrollTop);
        clear();
        console.log(scrollRemaining);
      } else if (scrollRemaining >= -10 && scrollRemaining <= 0){
        body.scrollTop += scrollRemaining;
        scrollRemaining = (scrollFinal - body.scrollTop);
      } else if (scrollRemaining < -10){
        body.scrollTop += (scrollRemaining/20 - 10);
        scrollRemaining = (scrollFinal - body.scrollTop);
        console.log(scrollRemaining);
      }
    }

    // Start scrolling 
    let interval;
    function startScroll(){
      interval = setInterval(scrollDown, 25);
    }

    // End scrolling
    function clear(){
      clearInterval(interval);
    } 
    startScroll();
  }
    render() {
      // Smooth Scroll on clicking nav items
      // $('nav a').click(function () {
      //   var $href = $(this).attr('href');
      //   $('body').stop().animate({
      //     scrollTop: $($href).offset().top
      //   }, 500);
      //   return false;
      // });


      // back to top
      $('#toTop a').click(function () {
        $('body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      });

      // Parallaxing + add class active on scroll
      $(document).scroll(function () {
        
        // parallaxing
        var $movebg = $(window).scrollTop() * -0.3;
        $('.portion').css('background-positionY', ($movebg) + 'px');

        // add class active to nav a on scroll
        var scrollPos = $(document).scrollTop() + 100;
        $('nav li').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav li').removeClass("active");
            currLink.addClass("active");
          }
        });
        
        // changing padding of nav li on scroll
          if (scrollPos > 250) {
            $('nav li').addClass('small');
            $('nav img').addClass('move');
            $('nav span').removeClass('movetext');
          } else {
            $('nav li').removeClass('small');
            $('nav img').removeClass('move');
            $('nav span').addClass('movetext');
          }
        
      });
        return (
          <header>
            <nav className="nav2">
              <span className="movetext">Robin Lake</span>
              <img class="" src="components/about/aboutInfo/March26.png" />
              <li href="#title" className="active" onClick={() => this.scrollEvent("#title")}>Home</li>
              <li href="#about" onClick={() => this.scrollEvent("#about")}>About</li>
              <li href="#projects" onClick={() => this.scrollEvent("#projects")}>Projects</li>
              <li href="#Contact" onClick={() => this.scrollEvent("#Contact")}>Contact</li>
            </nav>
          </header>
        );
    }
}
 