import React, { Component } from 'react'
import './stepper.css';
import './ThreeStateCheckbox.css';
import './Font.css';
import './Text.css';


class ConfirmC extends Component {
    constructor() {
      super()
    }

    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
  
    render() {
      const {values} = this.props;
      return (
        <div style={{
          display: 'flex',  
          alignItems:'center', 
          flexDirection: "column",
          
          }}>
            <div class="containerS" >
              <ul class="progressbar">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
              </ul>
            </div>
            
            <div style={{
                display: 'flex',
                marginTop: 30,
                flexDirection: "column",
                maxWidth: 500,
                width: '100%',      
            }}>
                
                <p class="headL" style={{color: "#000000",textAlign: "center",marginTop: 10}}>{values.Lang === "th" ? "ยืนยันการเลือกสภานักศึกษา" : "Voting for Student Council confirmation"}</p>
                <div style={{ 
                    marginLeft: 20,
                    marginRight: 20,
                    display: 'flex', 
                    marginTop: 15,
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                    border: "2px solid black",
                    padding: "5px 10px 15px 10px ",
                }}>
                    {values.people.map(person => (
                        <div className="boxC" key={person.id}>
                          <label class="textM" style={{alignSelf: 'center'}}>{values.Lang === "th" ? person.name : person.nameEng}</label>
                          <span className={person.select}></span>
                        </div>))
                      }
                    
                      
             
                      
                      
                          
                </div>
                  
                <p class="textM" style={{marginTop: 30,fontSize:20,marginLeft: 20,marginRight: 20,textAlign: "center"}}>
                {values.Lang === "th" ? "เมื่อยืนยันแล้ว จะไม่สามารถแก้ไขได้อีก คุณจะยืนยันการเลือกหรือไม่" : "ฺAfter click comfirm, this action can’t be undo Do you want to comfirm your vote?"}</p>
            </div>

            <div style={{ 
                display: 'flex', 
                marginTop: 30,
                flexDirection: "row",
                maxWidth: 500,
                width: '100%',
                marginRight: 10,
                justifyContent:'center',
                justifyContent: "space-around",
                marginRight: 15,
                marginBottom: 40,
            }}>
                <button className="wrongbutton"   style={{padding: "5px 26px"}} onClick={this.back}>{values.Lang === "th" ? "แก้ไข" : "ฺBack"}</button>
                <button className="confirmbutton" style={{padding: "5px 15px"}} onClick={this.continue}>{values.Lang === "th" ? "เสร็จสิ้น" : "Confirm"}</button>
            </div>
          
        </div>

      )
    }
}
  
  export default ConfirmC