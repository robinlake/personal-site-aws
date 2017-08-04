import React from 'react';
import { AboutInfo } from './aboutInfo';
import { TechnologiesInfo } from './technologiesInfo';
import { ResumeInfo } from './resumeInfo';

function SelectLanguage (props) {
    var languages = ['About', 'Technologies', 'Resume'];
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

export class AboutNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedAboutOption: 'About'
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
      if(this.state.selectedAboutOption == "About"){
        displayed = <AboutInfo />
      } else if(this.state.selectedAboutOption == "Technologies"){
        displayed = <TechnologiesInfo />
      } else if(this.state.selectedAboutOption == "Resume"){
        displayed = <ResumeInfo />
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
