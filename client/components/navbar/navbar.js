import React from 'react';


export class MainNavbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scroll: "null",
      scheduled: false
    };

    this.scrollEvent = this.scrollEvent.bind(this);
    this.schedule = this.schedule.bind(this);
  }

  scrollEvent() {
    // window.scrollY > this.state.previous ? console.log('down') : console.log('up');
    if(window.scrollY >= this.state.previous){
      let y = document.getElementById("mainNav");
      y.classList.add("hidden");
    } else {
      let y = document.getElementById("mainNav");
      y.classList.remove("hidden");
    }
    this.setState ({
      previous: window.scrollY
    });
  }

  schedule() {
    if(this.state.scheduled == false) {
      this.scrollEvent();
      this.setState({scheduled: true});
      setTimeout(function(){
        console.log('fired');
        this.scrollEvent();
        this.setState({scheduled: false});
      }.bind(this), 500);
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.schedule);
  }

  render () {
    return (
      <div className="mainNav" id="mainNav">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}