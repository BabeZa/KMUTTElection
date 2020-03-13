import React, { Component } from 'react'
import './stepper.css';
import './Text.css';
import './Font.css';
import ConfirmO1 from "./ConfirmO1.js"
import ConfirmO0 from "./ConfirmO0.js"
import Group from './asserts/group.jpg';


class ConfirmO extends Component {
    constructor() {
      super()
      this.showConfirmO = this.showConfirmO.bind(this)
    }
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    showConfirmO = () => {
      const { Organ, Lang } = this.props.values;
      console.log("เลือก" + Organ)
      if(Organ == "ไม่ประสงค์ลงคะแนน")
          return (<ConfirmO0 Lang = {Lang}/>);
      if(Organ == "พรรคใจไว้ที่เทอว์")
          return (<ConfirmO1
              Lang = {Lang}
              num = "1"
              pic = {Group}
              name = "พรรคใจไว้ที่เทอว์"
              nameEng = 'JaiWaiTeTer Party'
          />); 
      if(Organ == "พรรคใจไว้ที่เรา")
          return (<ConfirmO1
              Lang = {Lang}
              num = "2"
              pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ2dfPfoGvCrCgPEXcB05eInfva1CVHhu9GZbk92y-ltHvvdCc"
              name = "พรรคใจไว้ที่เรา"
              nameEng= 'PonTerNaKonDee Party'
          />);
      if(Organ == "พรรคใจไว้ที่เขา")
          return (<ConfirmO1
              Lang = {Lang}
              num = "3"
              pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ2dfPfoGvCrCgPEXcB05eInfva1CVHhu9GZbk92y-ltHvvdCc"
              name = "พรรคใจไว้ที่เขา"
              nameEng = 'TeJaLom Party'
          />);  
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
                <li></li>
                <li></li>
              </ul>
            </div>
            
            <div style={{
                display: 'flex',
                marginTop: 20,
                flexDirection: "column",
                maxWidth: 600,
                width: '100%',      
            }}>
                
                <p class="headM" style={{textAlign: "center"}}>{values.Lang === "th" ? "ยืนยันการเลือกคณะกรรมการ\nองค์การบริหารองค์การนักศึกษา" : "Voting for Student Administration\nconfirmation"}</p>
                {this.showConfirmO()}
                  
                <p class="textM" style={{marginTop: 20,marginLeft: 20,marginRight: 20,textAlign: "center"}}>{values.Lang === "th" ? "เมื่อยืนยันแล้ว จะไม่สามารถแก้ไขได้อีก คุณจะยืนยันการเลือกหรือไม่" : "After click comfirm, this action can’t be undo Do you want to comfirm your vote?"}</p>
            </div>

            <div style={{ 
                display: 'flex', 
                marginTop: 20,
                flexDirection: "row",
                maxWidth: 600,
                width: '100%',
                marginRight: 10,
                justifyContent:'center',
                justifyContent: "space-around",
            }}>
                <button className="wrongbutton"   style={{padding: "5px 26px"}} onClick={this.back}>{values.Lang === "th" ? "แก้ไข" : "Back"}</button>
                <button className="confirmbutton" style={{padding: "5px 15px"}} onClick={this.continue}>{values.Lang === "th" ? "เสร็จสิ้น" : "Confirm"}</button>
            </div>
          
        </div>

      )
    }
}
  
  export default ConfirmO