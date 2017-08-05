import React from 'react';
import { FrontEnd } from './frontEnd';
import { BackEnd } from './backEnd';
import { FullStack } from './fullStack';

function SelectNavHeader (props) {
    var headerArray = ['Front End', 'Back End', 'Full Stack'];
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

export class ProjectsNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedAboutOption: 'Full Stack'
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
      if(this.state.selectedAboutOption == "Front End"){
        displayed = <FrontEnd />
      } else if(this.state.selectedAboutOption == "Back End"){
        displayed = <BackEnd />
      } else if(this.state.selectedAboutOption == "Full Stack"){
        displayed = <FullStack />
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
