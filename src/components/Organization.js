import React, { Component } from 'react'
import './button.css';
import './card.css';
import './Font.css';
import './stepper.css';
import './Organization.css';

class Organization extends Component {
    state = {
        press: false
    }
    
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    
    render() {
        const {values, handlechange} = this.props;
      return (
        <div style={{
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            flexDirection: "column",
            height: '100%',
            justifyContent: "space-between",
            }}>
              <div class="headerColor" style={{
                  display: 'flex',  
                  alignItems:'center', 
                  flexDirection: "column",
                  width: '100%',
                  position: '-webkit-sticky',
                  position: 'sticky',
                  top: 0,
                  zIndex: 10,
               }}>
                  <div class="containerS" >
                      <ul class="progressbar">
                          <li class="active"></li>
                          <li class="active"></li>
                          <li ></li>
                          <li></li>
                          <li></li>
                      </ul>
                  </div>
  
                  <div class="Header">
                      <h5 class="headM" style={{alignSelf: 'center',textAlign: 'center',marginTop: 10,fontWeight: 'normal',marginBottom: 0}}>{values.Lang === 'th' ? "เลือกคณะกรรมการ" : "Vote for Student Administration"}</h5>
                      <h5 class="headM" style={{alignSelf: 'center',textAlign: 'center',fontWeight: 'normal'}}>{values.Lang === 'th' ? "องค์การบริหารองค์การนักศึกษา" : ""}</h5>
                  </div>
              </div>  
              
              <div class="boxO">
  
                  <div style={{marginTop: 15,width: "100%",}}>
                      <div style={{}}>
                          <p class="textSM" style={{textAlign: 'center',marginBottom: 0}}>{values.Lang === 'th' ? "โปรดเลือกพรรคเพียง 1 พรรคเท่านั้น" : "Please vote for only 1 party"}</p>
                          <p class="textSSM" style={{textAlign: 'center'}}>{values.Lang === 'th' ? "กดที่เบอร์,ชื่อพรรคหรือรูปภาพ เพื่อทำการโหวต" : "Press the number or the name of party for doing the vote"}</p>
                      </div>
                      <div style={{width: '100%',paddingLeft: 5,paddingRight: 5,paddingBottom: 20,display: 'flex', justifyContent: 'center',alignItems:'center',flexWrap: "wrap",}}>
                        {values.Organs.map(party => (
                            <div className="cardO" key={party.id} onClick={handlechange('Organ',party.name)}>
                                <img class="imgHide" src={party.pic} alt="Avatar" style={{width:'100%',borderTopLeftRadius: 30,borderTopRightRadius: 30}}/>
                                <div className={values.Organ === party.name ? "cardOAfter" : "cardOBefore"}>
                        <label style={{backgroundColor: "#ffffff",padding: '5px 20px',marginRight: 10,fontSize: 25,marginBottom: 0,borderRadius: 12}}>{party.num}</label>
                                    <p class="textM" style={{marginBottom: 0}}>{values.Lang === "th" ? party.name : party.nameEng}</p>
                                </div>
                        </div>))}

                        <div class={values.Organ === "ไม่ประสงค์ลงคะแนน" ? "cardNActive" : "cardN"} style={{}} onClick={handlechange('Organ',"ไม่ประสงค์ลงคะแนน")}>
                            <div></div>
                            <p class="textM" style={{alignSelf: 'center',textAlign: 'center',alignItems: 'center',marginTop: 10}}>{values.Lang === "th" ? "ไม่ประสงค์ลงคะแนน" : "Vote No"}</p>
                            <div></div>
                        </div>
  
                      </div>
  
                  </div>
  
              </div>
                  
              <h5 class="textS" style={{color: "#DC2E00",marginTop: 10}}>{this.state.press ? values.Organ === "" ? values.Lang === "th" ?    "กรุณาทำการเลือกพรรคหรือไม่ประสงค์ลงคะแนน"  : "Please vote for a party or vote no": <br/> : <br/>}</h5>
            <div style={{marginBottom: 25,}}>
                <button className={values.Organ !==  "" ? "confirmbutton" : "unconfirmbutton" } onClick={values.Organ === "" ? () => {this.setState({press: true});} : this.continue}>{values.Lang === "th" ? "ยืนยัน" : "Confirm"}</button>
            </div>
            
          </div>

      )
    }
}
  
  export default Organization