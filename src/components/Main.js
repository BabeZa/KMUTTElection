import React, { Component } from 'react';
import Login from "./Login.js"
import Information from "./Information.js"
import InformationE from "./InformationE.js"
import Organization from "./Organization.js"
import Council from "./Council.js"
import ConfirmO from "./ConfirmO.js"
import ConfirmC from "./ConfirmC.js"
import Finish from "./Finish.js"
import Group from './asserts/group.jpg';

export class StepForm extends Component {
    state = {
        step:1,
        Organ: "",
        Lang: "th",
        Organs: [
            {id: 1,pic: Group, name: 'พรรคใจไว้ที่เทอว์',nameEng: 'JaiWaiTeTer Party', num: '1'},
            {id: 2,pic: Group, name: 'พรรคใจไว้ที่เรา',nameEng: 'PonTerNaKon Party', num: '2'},
            {id: 3,pic: Group, name: 'พรรคใจไว้ที่เขา',nameEng: 'TeJaLom Party', num: '3'},
        ],
        people: [
            {id: 1,pic: 'https://image.flaticon.com/icons/svg/761/761824.svg', name: 'นายมะลึก กึ๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 2,pic: 'https://image.flaticon.com/icons/svg/761/761837.svg', name: 'นางสาวชะแว๊บ ชะวู้วว', nameEng: 'Mr. Chavab Chavuu',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '2', select: '0'},
            {id: 3,pic: 'https://image.flaticon.com/icons/svg/761/761840.svg', name: 'นางสาวทาด๊าา ทาแด๊นน', nameEng: 'Mr. Tadaa Tadann',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '3', select: '0'},
            {id: 4,pic: 'https://image.flaticon.com/icons/svg/761/761842.svg', name: 'นายง่วงแล้ว กำลังจะสลบ', nameEng: 'Mr. Nunglao Kamlanjasalub',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 5,pic: 'https://image.flaticon.com/icons/svg/761/761822.svg', name: 'นายมะลึก กึกกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '4', select: '0'},
            {id: 6,pic: 'https://image.flaticon.com/icons/svg/761/761827.svg', name: 'นายมะลึก ก๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 7,pic: 'https://image.flaticon.com/icons/svg/761/761847.svg', name: 'นายมะลึก กึ๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 8,pic: 'https://image.flaticon.com/icons/svg/761/761842.svg', name: 'นายมะลึก กึ๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 9,pic: 'https://image.flaticon.com/icons/svg/761/761835.svg', name: 'นายมะลึก กึ๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
            {id: 10,pic: 'https://image.flaticon.com/icons/svg/761/761819.svg', name: 'นายมะลึก กึ๊กกึ๋ย', nameEng: 'Mr. Maluk QutQuan',faculty:'วิศวกรรมศาสตร์',Depart:'วิศวกรรมคอมพิวเตอร์',DepartEng:'Computer Engineering',year: '1', select: '0'},
        ],
        

    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    InfoE = () => {
        this.setState({
            step: 8
        });
    }
    Info = () => {
        this.setState({
            step: 2
        });
    }
    Login = () => {
        this.setState({
            step: 1
        });
    }

    handlechange = (input,data) => e =>{
        if(input === 'Lang'){
            this.setState({Lang: e.target.value});
            console.log([input])
        }else{
        this.setState({[input]: data});
        console.log([input]);
        console.log(data)}
    }

    handleselect = (id,s) => e =>{
        this.setState(state => ({
            people: [...state.people].map(person => {
                if(person.id === id){
                    return {
                        ...person,
                        select: s
                    };
                } else{
                    return person;
                }
            })
        }))
    }

    showStep = () => {
        const { step, Organ, people, Organs, Lang} = this.state;
        const values = {Organ, people, Organs, Lang};
        if(step === 1)
            return (<Login
                nextStep = {this.nextStep} 
                handlechange = {this.handlechange}
                values={values}
            />);
        
        if(step === 2)
            return (<Information
                nextStep = {this.nextStep} 
                InfoE = {this.InfoE}
                values={values}
            />);
        if(step === 8)
            return (<InformationE
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                Info = {this.Info}
                Login = {this.Login}
                values={values}
            />);    

        if(step === 3)
            return (<Organization 
                nextStep = {this.nextStep}
                handlechange = {this.handlechange}
                values={values} 
            />);
        if(step === 4)
            return (<ConfirmO
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                values={values}
            />);
        if(step === 5)
            return (<Council
                nextStep = {this.nextStep}
                handleselect = {this.handleselect} 
                values={values}
                
            />);
        if(step === 6)
            return (<ConfirmC
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                values={values} 
                
            />);
        if(step === 7)
            return (<Finish values={values}/>);
        
    }



    render(){
        

        return(
            <>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;