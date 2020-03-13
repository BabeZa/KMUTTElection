import React, { Component } from 'react'
import './Font.css';
import './Text.css';

class ConfirmO1 extends Component {
    constructor() {
      super()
    }
    render() {
      const {num,pic,name,Lang,nameEng} = this.props;
      return (
        <div style={{ 
            marginLeft: 20,
            marginRight: 20,
            display: 'flex', 
            marginTop: 10,
            flexDirection: "column",
            backgroundColor: "#ffffff",
            borderRadius: 20,
            border: "3px solid black",
            padding: "15px 30px"
        }}>
            <p class="textM" style={{textAlign: "center"}}>{Lang === 'th' ? "เบอร์ " : "Number "}{num}</p>  
            <img src={pic} alt="Avatar" style={{width:'90%',border: "3px solid black",alignItems: "center",alignSelf: "center"}}/> 
            <p class="textM" style={{textAlign: "center",marginTop: 15,}}>{Lang === 'th' ? name : nameEng}</p>        
        </div>
                  
      )
    }
}
  
  export default ConfirmO1