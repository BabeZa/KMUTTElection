import React, { Component } from 'react'
import './stepper.css';
import './ThreeStateCheckbox.css';
import './Font.css';


class Information extends Component {
    constructor() {
      super()
      this.state={
        aa: 'neutral',
        bb: 'positive',
        cc: 'negative',
        dd: 'positive',
        ee: 'positive',
        ff: 'neutral',
        gg: 'negative',
        hh: 'positive',
      };
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
                
                
                <div style={{ 
                    marginLeft: 20,
                    marginRight: 20,
                    display: 'flex', 
                    marginTop: 30,
                    flexDirection: "column",
                    backgroundColor: "#546399",
                    borderRadius: 25,
                }}>
                    <p style={{color: "#ffffff",fontSize:22,textAlign: "center",marginTop: 5}}>ทำการเลือก<br/>สภานักศึกษาเสร็จสิ้น</p>
                    <div style={{ 
                        marginLeft: 15,
                        marginRight: 15,
                        display: 'flex', 
                        marginTop: 15,
                        marginBottom: 40,
                        flexDirection: "column",

                    }}>
                      {values.people.map(person => (
                        <div className="box" key={person.id}>
                          <label style={{fontSize:22,alignSelf: 'center'}}>{person.name}</label>
                          <span className={person.select}></span>
                        </div>))
                      }
                      
                      
                      
                    </div>       
                </div>
                  
                <p style={{marginTop: 30,fontSize:20,marginLeft: 20,marginRight: 20,textAlign: "center"}}>เมื่อเลือก ‘เสร็จสิ้น’ จะไม่สามารถแก้ไขได้อีก คุณจะทำการแก้ไขหรือไม่</p>
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
                marginBottom: 40,
            }}>
                <button className="wrongbutton" onClick={this.back}>แก้ไข</button>
                <button className="confirmbutton" onClick={this.continue}>เสร็จสิ้น</button>
            </div>
          
        </div>

      )
    }
}
  
  export default Information