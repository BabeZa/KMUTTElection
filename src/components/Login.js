import React, { Component } from 'react';
import KMUTT from './asserts/KMUTT.png';
import './button.css';
import './Login.css';
import './Text.css';
import './dropdown.css';
import FaEyeSlash from 'react-icons/lib/fa/eye-slash';
import FaEye from 'react-icons/lib/fa/eye';

class Login extends Component {
    constructor() {
      super()
      this.state = {
        username: '',
        password: '',
        validated: true,
        eye: false,
        errors: {},
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.onEye = this.onEye.bind(this)

    }
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    onChange(e) {
      const re = /^[0-9\b]+$/;
      if(e.charCode === 13){
        this.onSubmit(e);
      }
      if(e.target.name === "username"){ 
      if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({[e.target.name] : e.target.value})}
      }else{
        this.setState({[e.target.name] : e.target.value})
      }
    }
    onEye(e){
      e.preventDefault();
      this.setState({eye: !this.state.eye})
      console.log(this.state.eye)
    }

    onSubmit(e) { 
      e.preventDefault();
      if(this.state.username === "60070501094" && this.state.password === "admin"){
        this.props.nextStep();
      }else{
        this.setState({validated: false})
      } 
    }

   
  
    render() {
      const {values,handlechange} = this.props;
      
      return (
        
        <div style={{
          display: 'flex',  
          justifyContent:'center', 
          alignItems:'center', 
          flexDirection: "column",
          height: '100vh',
          justifyContent: "space-between",
          }}>
          
          <div style={{marginTop: 5,marginRight: 5,display: 'flex',width: '100%',justifyContent: 'space-between',}}>
            
            <div class="box">
              <select onChange={handlechange('Lang',"")}>
                <option selected hidden>Change language</option>
                  <option value="th">Thai</option>
                  <option value="en">English</option>
              </select>
            </div>
            <img style={{height: 60}} onClick={this.continue} src={KMUTT}/>
          </div>
          
          <div style={{
            display: 'flex',  
            alignItems:'center', 
            flexDirection: "column",
            maxWidth: 1000,
            width: '100%',
            
          }}>
            <div style={{display: 'flex', justifyContent: 'center',flexDirection: "column",}}>
              <h1 class="headL" style={{fontSize: 40, color: 'back',alignSelf: 'center',marginBottom: 0}}
                >{values.Lang === 'th' ? "ระบบการเลือกตั้ง" : "Electoral System"}</h1>
              <div style={{flexWrap: 'wrap',flexDirection: 'row',display: 'flex',justifyContent:'center' }}>
                <p class="textSS" style={{alignSelf: 'center',textAlign: 'center',marginBottom: 0}}
                  >{values.Lang === 'th' ? "คณะกรรมการองค์การบริหารองค์การนักศึกษาและ" : "Student Administration and Student Council of "}</p>
                <p class="textSS" style={{alignSelf: 'center',textAlign: 'center',marginBottom: 0}}
                  >{values.Lang === 'th' ? "สภานักศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" : "King Mongkut's University of Technology Thonburi"}</p>
              </div>
              
            </div>

            <div style={{marginTop: 30,width: "90%",maxWidth: 400,padding: "15px 20px", backgroundColor: 'white',border: '2px solid black',borderRadius: 30,boxShadow:'0px 4px 4px  rgba(0,0,0,0.25)'}}>
              <p className="textSS" style={{alignSelf: 'center',textAlign: 'center',marginBottom: 25}}>{values.Lang === 'th' ? "เข้าสู่ระบบด้วย KMUTT internet account" : "Login with KMUTT internet account"}</p>
              <div className="wrap-Login">
                <input
                  className="Login" 
                  placeholder={values.Lang === 'th' ? "รหัสนักศึกษา" : "Student ID "}
                  type="text"
                  maxlength="11"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  onKeyPress={this.onChange}
                  required
                />
              </div>
              <br/>
              <div className="wrap-Login">
                <input
                  className="Login" 
                  placeholder={values.Lang === 'th' ? "รหัสนักผ่าน" : "Password"}
                  type={this.state.eye ? "text":"password"}
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  onKeyPress={this.onChange}
                  required
                />
                  <div onClick={this.onEye}>{this.state.eye ? <FaEye className="icon" style={{color: '#B7B7B7'}}/> : <FaEyeSlash className="icon" style={{color: '#B7B7B7'}}/>}</div>
              </div>

              <p style={{color: 'red', marginBottom: 10,textAlign: 'end',marginTop: 6}}>{this.state.validated ? <br/>: values.Lang === 'th' ? "รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง" : "student ID or password is incorrect"}</p>
          
            </div>

            <div style={{display: 'flex', justifyContent: 'center',marginTop: 40 ,marginBottom:10,flexDirection: "column",}}>
              <button class="login" onClick={this.onSubmit} style={{width: 150,alignSelf: 'center',marginRight: 22}}>{values.Lang === 'th' ? "เข้าสู่ระบบ" : "Login"}</button>
              <a style={{color: '#000000',fontSize: 13,alignSelf: 'center',marginTop: 8,textDecorationLine: "underline",marginRight: 5}} href="https://myaccount.kmutt.ac.th/accountactivation-app/recovery-account">{values.Lang === 'th' ? "ลืมรหัสผ่าน" : "forgot password?"}</a>
            </div>

          </div>
          
          <div style={{  marginBottom: 15,flexDirection: "row", flexWrap:'wrap'}}>
            <a class="texta" style={{color: '#000000'}}>{values.Lang === 'th' ? "สามารถติดตามข้อมูลข่าวสารเพิ่มเติมได้ที่"  : "For more information, see in facebook page  "} </a>
            <a class="textl" style={{color: '#000000'}} href="https://www.facebook.com/KMUTT-Election-111526570306064">KMUTT Election</a>
          </div>
              
          
        </div>

      )
    }
}
  
  export default Login