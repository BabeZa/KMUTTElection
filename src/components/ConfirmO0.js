import React, { Component } from 'react'
import './Font.css';
import './ConfirmO0.css';

class ConfirmO0 extends Component {
    constructor() {
      super()
    }
    render() {
      const {Lang} = this.props;
      return (
        <div class='ConfirmO0'>
            <p style={{fontSize:30,textAlign: "center",color: "#FA4616"}}>{Lang === 'th' ? "ไม่ประสงค์ลงคะแนน" : "Vote No"}</p>         
        </div>
                  
      )
    }
}
  
  export default ConfirmO0