import React, { Component } from 'react';
import $ from 'jquery';

export class ReactNav extends Component {
  constructor(props){
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  // Scroll event vanilla Javascript function
  scrollEvent(input){
    let scrollFinal = document.querySelector(input).offsetTop;
    let body = document.body;
    let scrollRemaining = (scrollFinal - body.scrollTop);

    // Scroll down if not at correct position
    function scrollDown(){
      if (scrollRemaining > 50){
        body.scrollTop += 50;
        scrollRemaining = (scrollFinal - body.scrollTop);
        console.log(scrollRemaining);
      } else if(scrollRemaining <= 50 && scrollRemaining >= 0){
        body.scrollTop += scrollRemaining;
        scrollRemaining = (scrollFinal - body.scrollTop);
        clear();
        console.log(scrollRemaining);
      } else if (scrollRemaining >= -50 && scrollRemaining <= 0){
        body.scrollTop += scrollRemaining;
        scrollRemaining = (scrollFinal - body.scrollTop);
      } else if (scrollRemaining < -50){
        body.scrollTop -= 50;
        scrollRemaining = (scrollFinal - body.scrollTop);
        console.log(scrollRemaining);
      }
    }

    // Start scrolling 
    let interval;
    function startScroll(){
      interval = setInterval(scrollDown, 50);
    }

    // End scrolling
    function clear(){
      clearInterval(interval);
    } 
    startScroll();
  }
    render() {
      // Smooth Scroll on clicking nav items
      $('nav a').click(function () {
        var $href = $(this).attr('href');
        $('body').stop().animate({
          scrollTop: $($href).offset().top
        }, 500);
        return false;
      });


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
        $('nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav a').removeClass("active");
            currLink.addClass("active");
          }
        });
        
        // changing padding of nav a on scroll
          if (scrollPos > 250) {
            $('nav a').addClass('small');
            $('nav img').addClass('move');
            $('nav span').removeClass('movetext');
          } else {
            $('nav a').removeClass('small');
            $('nav img').removeClass('move');
            $('nav span').addClass('movetext');
          }
        
      });
        return (
          <header>
            <nav className="nav2">
              <span className="movetext">Company Name</span>
              <img class="" src="https://www.matchbook.com/assets/images/icons/white/Twitter_logo_white.png" />
              <a href="#title" className="active" onClick={() => this.scrollEvent("#title")}>Home</a>
              <a href="#about" onClick={() => this.scrollEvent("#about")}>About</a>
              <a href="#projects">Projects</a>
              <a href="#Contact">Contact</a>
              <button onClick={() => this.scrollEvent("#about")}>test</button>
            </nav>
          </header>
        );
    }
}
 