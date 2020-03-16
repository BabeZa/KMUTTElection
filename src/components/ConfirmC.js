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
                maxWidth: 850,
                width: '100%',
                    
            }}>
                
                <p class="headL" style={{color: "#000000",textAlign: "center",marginTop: 5}}>{values.Lang === "th" ? "ยืนยันการเลือกสภานักศึกษา" : "Voting for Student Council confirmation"}</p>
                <div style={{ 
                    marginLeft: 20,
                    marginRight: 20,
                    display: 'flex', 
                    marginTop: 5,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 35,
                    border: "2px solid black",
                    padding: "20px 5px 25px 5px ",
                    flexWrap: 'wrap',
                    justifyContent: 'center' 
                }}>
                    {values.people.map(person => (
                        <div className="boxC" key={person.id}>
                          <label class="textS" style={{alignSelf: 'center',marginTop: 6,marginBottom: 0}}>{values.Lang === "th" ? person.name : person.nameEng}</label>
                          <span className={person.select}></span>
                        </div>))
                      }
                    
                      
             
                      
                      
                          
                </div>
                  
                <p class="textMM" style={{marginTop: 20,marginLeft: 20,marginRight: 20,textAlign: "center",marginBottom: 0}}>{values.Lang === "th" ? "เมื่อเสร็จสิ้นแล้ว จะไม่สามารถแก้ไขได้อีก" : "After click comfirm, this action can’t be undo."}</p>
                <p class="textMM" style={{marginLeft: 20,marginRight: 20,textAlign: "center"}}>{values.Lang === "th" ? "คุณจะยืนยันการเลือกหรือไม่" : "Do you want to comfirm your vote?"}</p>
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