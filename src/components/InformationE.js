import React, { Component } from 'react'
import './stepper.css';
import './Information.css';
import './Text.css';
import './Modal.css';
import './card.css';
import Check from './asserts/check.png';
import Avatar from './asserts/Avatar.png';
import ReactModal from 'react-modal';


class InformationE extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        phone: "",
        description: "",
        validated: true,
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.onChange = this.onChange.bind(this)
      this.check = this.check.bind(this)
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }

    check(e) {
      e.preventDefault();
      if(this.state.phone !== "" && this.state.description !== ""){
        this.handleOpenModal ()
        this.setState({validated: true})
      }else{
        this.setState({validated: false})
      }
      
    }
    

    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    Info = e => {
        e.preventDefault();
        this.props.Info();
    }

    Login = e => {
      e.preventDefault();
      this.props.Login();
    }
    onChange(e) {
      const re = /^[0-9\b]+$/;
      if(e.target.name === "phone"){ 
      if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({[e.target.name] : e.target.value})}  
      }else{
        this.setState({[e.target.name] : e.target.value})
      }
    }
    
  
    render() {
      const {values} = this.props;
      return (
        <div style={{
          display: 'flex',  
          alignItems:'center', 
          flexDirection: "column",
          
          
          }}>
            <ReactModal 
               isOpen={this.state.showModal}
               contentLabel="onRequestClose Example"
               onRequestClose={this.handleCloseModal}
               className="ModalInfoE"
               overlayClassName="Overlay"
            >
              <img src={Check} alt="Check" style={{maxWidth: 150,width: "35%",alignSelf: "center",marginBottom: 10}}/>
              <div>
                <h5 class="headM" style={{textAlign: "center",marginBottom:  0}}>{values.Lang === 'th' ? "ส่งข้อความสำเร็จ" : "Send Message Successfully"}</h5> 
                <h5 class="headS" style={{textAlign: "center",marginBottom: 20}}>{values.Lang === 'th' ? "กรุณารอการติดต่อกลับ" : "please wait for us to call back"}</h5>
              </div>
              
              <button className="wrongbutton" style={{alignSelf: 'center',alignItems: 'center',marginRight: 23,marginBottom: 20}} onClick={this.Login}>{values.Lang === 'th' ? "เข้าสู่ระบบอีกครั้ง" : "Login again"}</button>
              
            </ReactModal>

            <div class="containerS" >
              <ul class="progressbar">
                <li class="active"></li>
                <li ></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div class="infoEContent">

              <div style={{
                    display: 'flex',  
                    flexDirection: "column",
                    alignItems:'center', 
                    alignSelf:'center', 
                    maxWidth: 350,
                    width: '90%',
                    backgroundColor: "#ffffff",
                    borderRadius: 40,
                    marginTop: 20,
                    border: "2px solid black",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    padding: "10px 5px",
                }}>
                    <img src={Avatar} alt="Avatar" style={{maxWidth: 180,width:'30%',alignSelf: "center",border: "3px solid black",marginBottom: 10,marginTop: 10}}/>
                    <p class="infoM" style={{textAlign: "center"}}>{values.Lang === 'th' ? "นาย ประเสริฐ มุ่งมานะ" : "Mr. Prasert Mungmana"}<br/>6007050999</p>
                    <p class="infoS" style={{textAlign: "center"}}>{values.Lang === 'th' ? "คณะวิศวกรรมศาสตร์" : "Faculty of Engineering"}<br/>{values.Lang === 'th' ? "ภาควิชาวิศวกรรมคอมพิวเตอร์" : "Engineering Computer"}<br/>{values.Lang === 'th' ? "ชั้นปีที่ 3" : "3rd year"}</p>
                </div>
                
                <div class="infoEContent2">
                  <p class="textS" style={{marginBottom: 2}}>{values.Lang === 'th' ? "เบอร์โทรศัพท์ของคุณ" : "Your phone number"}</p>
                  <input
                    type="text"
                    maxlength="10"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    required
                    ></input>
                  <p class="textS" style={{marginBottom: 2,marginTop: 15}}>{values.Lang === 'th' ? "ข้อมูลที่ไม่ถูกต้อง" : "Information that are not accureate"}</p>
                  <textarea style={{}} name="description" value={this.state.description} onChange={this.onChange} required ></textarea>
                </div>

                
            </div>

            <div style={{ 
                display: 'flex', 
                marginTop: 25,
                flexDirection: "row",
                maxWidth: 800,
                width: '100%',
                justifyContent:'center',
                justifyContent: "space-around",
                marginRight: 15,
                marginBottom: 20,
            }}>
              
                <button className="wrongbutton"   style={{padding: "5px 20px"}}onClick={this.Info}>{values.Lang === 'th' ? "ย้อนกลับ" : "Back"}</button>
              
                <button className={(this.state.phone !== "" && this.state.description !== "") ? "confirmbutton" :  "unconfirmbutton" } style={{padding: '5px 20px'}} onClick={this.check}>{values.Lang === 'th' ? "ส่งข้อความ" : "Send Message"}</button>
                
            </div>
            
        </div>

      )
    }
}
  
  export default InformationE