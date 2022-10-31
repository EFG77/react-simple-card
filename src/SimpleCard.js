import React, { Component } from 'react';
import TitleComp from './Components/TitleComp';
import Descrip from './Components/Descrip';
import Image from './Components/Image';

 
export default class SimpleCard extends Component {
  render() {
    let Title= <h1>"Welcome to the Chech Republic"</h1>
    let Info= <p>"A beautiful country with a lot of lovely natural landscape."</p>
    let Pic= <img src='https://media.istockphoto.com/photos/adult-male-tourist-with-a-backpack-looking-from-a-viepoint-at-rock-picture-id1324670141?s=612x612' alt='' ></img>
    return (
      <div>
        <TitleComp Heading={Title}/>
      <Descrip Story={Info}/>
       <Image Show= {Pic}/>
      
            {this.props.Heading}
            {this.props.Story}
            {this.props.Show}
         </div>
    );
  }
}
