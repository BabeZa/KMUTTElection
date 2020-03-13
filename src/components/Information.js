import React, { Component } from 'react'
import './stepper.css';
import './Information.css';
import './Text.css';
import './Modal.css';
import Avatar from './asserts/Avatar.png';
import ReactModal from 'react-modal';

class Information extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    InfoE = e => {
        e.preventDefault();
        this.props.InfoE();
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
               className="ModalInfo"
               overlayClassName="Overlay"
            >
              <h5 class="headM" style={{textAlign: 'center',}}>{values.Lang === 'th' ? "ขั้นตอนการเลือกตั้ง" : "Election Process"}</h5>
              <button className="acknowledge" style={{alignSelf: 'center',alignItems: 'center',width: 200,marginRight: 0}} onClick={this.continue}>{values.Lang === 'th' ? "รับทราบ" : "Acknowledge"}</button>
              {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
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
            <h5 class="headL" style={{marginTop: 30,}}>{values.Lang === 'th' ? "ยืนยันข้อมูลนักศึกษา" : "Verify Student Information"}</h5>
            <div style={{
                display: 'flex',  
                flexDirection: "column",
                alignItems:'center', 
                maxWidth: 400,
                width: '90%',
                backgroundColor: "#ffffff",
                borderRadius: 40,
                marginTop: 15,
                border: "2px solid black",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "30px 5px"
                
                
            }}>
                <img src={Avatar} alt="Avatar" style={{maxWidth: 180,width:'30%',alignSelf: "center",border: "3px solid black",marginBottom: 10}}/>
                <p class="infoM" style={{textAlign: "center"}}>{values.Lang === 'th' ? "นาย ประเสริฐ มุ่งมานะ" : "Mr. Prasert Mungmana"}<br/>6007050999</p>
                <p class="infoS" style={{textAlign: "center"}}>{values.Lang === 'th' ? "คณะวิศวกรรมศาสตร์" : "Faculty of Engineering"}<br/>{values.Lang === 'th' ? "ภาควิชาวิศวกรรมคอมพิวเตอร์" : "Engineering Computer"}<br/>{values.Lang === 'th' ? "ชั้นปีที่ 3" : "3rd year"}</p>
            </div>
                
                
            <h5 class="textM" style={{marginTop: 30,}}>{values.Lang === 'th' ? "ข้อมูลของคุณถูกต้องหรือไม่" : "Your information accurated?"}</h5>
            <div style={{ 
                display: 'flex', 
                marginTop: 25,
                flexDirection: "row",
                maxWidth: 800,
                width: '100%',
                justifyContent:'center',
                justifyContent: "space-around",
                marginRight: 15,
                marginBottom: 10,
                
            }}>
              
                <button class="wrongbutton"   style={{padding: "5px 0px",width: 106}} onClick={this.InfoE}>{values.Lang === 'th' ? "ไม่ถูกต้อง" : "No"}</button>
                <button class="confirmbutton" style={{padding: "5px 0px",width: 106}} onClick={this.handleOpenModal}>{values.Lang === 'th' ? "ถูกต้อง" : "Yes"}</button>
            </div>
          
        </div>

      )
    }
}
  
  export default Information