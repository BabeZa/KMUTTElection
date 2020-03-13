import React, { Component } from 'react'
import './card.css';
import './Font.css';
import './stepper.css';

class Council extends Component {
  state = {
    press: false
  }
    
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }
  
   
  
    render() {
      const {values, handleselect} = this.props;
      return (
        <div style={{
          display: 'flex',  
          justifyContent:'center', 
          alignItems:'center', 
          flexDirection: "column",
          height: '100%',
          justifyContent: "space-between",
          
          
          
          }}>
            <div style={{
                display: 'flex',  
                alignItems:'center', 
                flexDirection: "column",
                width: '100%',
                position: '-webkit-sticky',
                position: 'fixed',
                top: 0,
                backgroundColor: "#FED124"
                
             }}>
                <div class="containerS" >
                    <ul class="progressbar">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li></li>
                    </ul>
                </div>
                <div style={{width: "100%",height: 100,backgroundColor: "#FFFFFF",display: 'flex',justifyContent: 'center',marginTop: 15,border: "3px solid black"}}>
                      <p class="textM" style={{alignSelf: 'center',textAlign: "center",marginTop: 15}}>{values.Lang === "th" ? "เลือกสภานักศึกษา\nคณะวิศวกรรมศาสตร์" : "Vote for Student Council of Engineering"}</p>
                </div>
                <div style={{maxWidth: 600,marginTop: 160,position: 'absolute',width: '100%',display: 'flex',justifyContent: 'flex-end'}}>
                  <div class="count"> {values.people.filter(person => person.select !== '0').length}/{values.people.length}</div>
                </div>
            </div>  

            <div style={{marginTop: 165,width: "100%",maxWidth: 1000}}>
              <p class="textS" style={{alignSelf: "center",textAlign: 'center'}}>{values.Lang === "th" ? "โปรดพิจารณาสภานักศึกษาให้ครบทุกคน" : "Please examinate all of the candidate"}</p>
              <div style={{width: "100%",padding: '0px 5px',flexWrap: 'wrap',display: 'flex',justifyContent: 'center'}}>
                {values.people.map(person => (
                  <div className='cardC' style={{width:'100%', marginBottom:15,maxHeight: 140}}>
                    <img src={person.pic} alt="Avatar" style={{width:'30%',maxWidth: 110,border: '2px solid black'}}/>
                    <div style={{width:'100%'}}>
                    <h4 style={{paddingTop: 15,marginLeft: 10,fontSize: 15}}><b>{values.Lang === "th" ? person.name : person.nameEng}<br/>{values.Lang === "th" ? person.Depart : person.DepartEng} {values.Lang === "th" ? "ชั้นปีที่" : ""} {person.year} {values.Lang === "th" ? "" : "year"}</b></h4>
                      <div className='cardC3' style={{width:'100%',justifyContent:'space-between',paddingTop: 15, paddingRight: 5}}>
                        <button className={person.select === "positive" ? "accept" : "selected"} onClick={handleselect(person.id,'positive')}>{values.Lang === "th" ? "ยอมรับ" : "Accept"}</button>
                        <button className={person.select === "negative" ? "notaccept" : "selected"} onClick={handleselect(person.id,'negative')}>{values.Lang === "th" ? "ไม่ยอมรับ" : "Decline"}</button>
                        <button className={person.select === "neutral" ? "nocomment" : "selected"} onClick={handleselect(person.id,'neutral')}>{values.Lang === "th" ? "ไม่ออกเสียง" : "Vote No"}</button>
                      </div>
                      </div>
                    </div>))} 

                </div>
            </div>
            
            
                
            <h5 class="textM" style={{color: "#DC2E00"}}>{this.state.press ? !(values.people.filter(person => person.select !== '0').length === values.people.length) ? values.Lang === "th" ? "ยังทำการเลือกไม่เสร็จสิ้น" : "Still in process of voting"  : <br/> : <br/>}</h5>
            <div style={{marginBottom: 15,}}>
              <button className={!(values.people.filter(person => person.select !== '0').length === values.people.length) ? "unconfirmbutton" :  "confirmbutton" } style={{padding: '5px 20px'}} onClick={values.people.filter(person => person.select !== '0').length !== values.people.length ? () => {this.setState({press: true});} : this.continue}>{values.Lang === "th" ? "ยืนยัน" : "Confirm"}</button>
            </div>
          
        </div>

      )
    }
}
  
  export default Council