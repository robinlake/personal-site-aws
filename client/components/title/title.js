import React from 'react';
import { Name } from './name';
import { Particles } from './particles/particlesComponent';
 
export class Title extends React.Component{
  
    render(){
        return (
            <div id="title">
                <Name />
                <Particles />
            </div>
        );
    };
 
}