import React from 'react';
import { AboutInfo } from './aboutInfo/aboutInfo';
import { TechnologiesInfo } from './technologiesInfo/technologiesInfo';
import { ResumeInfo } from './resumeInfo/resumeInfo';

function SelectNavHeader (props) {
    var headerArray = ['About', 'Technologies', 'Resume'];
    return (
<ul className='Nav'>
        {headerArray.map(function(navHeader){
            return (
                <li
                    style={navHeader === props.selectedAboutOption? {color: '#d0021b'}: null}
                    onClick = {props.onSelect.bind(null, navHeader)}
                    key={navHeader}>
                    {navHeader}
                </li>
            )
        })}
    </ul>
    )
}

export class AboutNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedAboutOption: 'About'
        };

        this.updateNavHeader = this.updateNavHeader.bind(this);
    }
    componentDidMount(){
        this.updateNavHeader(this.state.selectedAboutOption);
    }
    updateNavHeader(navHeader){
        this.setState(function(){
            return {
                selectedAboutOption: navHeader
            }
        });
    }
    render(){
      let displayed;
      if(this.state.selectedAboutOption == "About"){
        displayed = <AboutInfo />
      } else if(this.state.selectedAboutOption == "Technologies"){
        displayed = <TechnologiesInfo />
      } else if(this.state.selectedAboutOption == "Resume"){
        displayed = <ResumeInfo />
      }
        return (
            <div>
                <SelectNavHeader
                selectedAboutOption={this.state.selectedAboutOption}
                onSelect={this.updateNavHeader}
                />
                {displayed}
            </div>
        )
    }
}
