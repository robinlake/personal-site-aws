import React from 'react';
import { FrontEnd } from './frontEnd';
import { BackEnd } from './backEnd';
import { FullStack } from './fullStack';

function SelectLanguage (props) {
    var languages = ['Front End', 'Back End', 'Full Stack'];
    return (
<ul className='languages'>
        {languages.map(function(lang){
            return (
                <li
                    style={lang === props.selectedAboutOption? {color: '#d0021b'}: null}
                    onClick = {props.onSelect.bind(null, lang)}
                    key={lang}>
                    {lang}
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

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount(){
        this.updateLanguage(this.state.selectedAboutOption);
    }
    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedAboutOption: lang
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
                <SelectLanguage
                selectedAboutOption={this.state.selectedAboutOption}
                onSelect={this.updateLanguage}
                />
                {displayed}
            </div>
        )
    }
}
