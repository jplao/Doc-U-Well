import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { addAppointment } from '../../actions/index';
import { addProvider } from '../../actions/index';
import { addInsurance } from '../../actions/index';
import { addProfile } from '../../actions/index';
import { connect } from 'react-redux';

class Schedule extends Component {
  constructor() {
    super()
    this.state = {
      blood: '',
      height: '',
      weight:'',
      bps: '',
      bpd: '',
      hr: '',
      date: '',
      time: '',
      ap: '',
      kind: '',
      provider: '',
      clinic: '',
      phone: '',
      address: '',
      specialty: '',
      insuranceType: '',
      polNum: '',
      notes: '',
    }
  }

  handleSubmit() {
    const { type, handleProfileSubmit, handleAppointmentSubmit, handleProviderSubmit, handleInsuranceSubmit } = this.props
    const { blood, height, weight, bps, bpd, hr, date, time, ap, kind, provider, clinic, phone, address, specialty, insuranceType, polNum, notes } = this.state
    let text
    switch (type) {
      case 'profile' :
        text = {blood, height, weight, bps, bpd, hr}
        handleProfileSubmit(text)
        this.setState({blood: '', height: '', weight: '', bps: '', bpt: '', hr: '' })
        break
      case 'appointments' :
        text = {date, time, kind, provider, notes}
        handleAppointmentSubmit(text)
        this.setState({date:'', time: '', kind: '', provider: '', notes: ''})
        break
      case 'providers' :
        text = {provider, clinic, phone, address, specialty}
        handleProviderSubmit(text)
        this.setState({provider: '', clinic: '', phone: '', address: '', specialty: ''})
        break
      case 'insurance' :
        text = {insuranceType, polNum}
        handleInsuranceSubmit(text)
        this.setState({insuranceType: '', polNum: ''})
        break
      default:
        return ('hit handleSubmit default')
    }
    // add submitted info to redux / make fetch for post of new data
    // close form 
  }

  informationSubmission(formData) {
    return (
      <section className='form-container'>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.handleSubmit()}}>
          <div>
            <h4 className='form-title'>Enter Your Information Below:</h4>
            <div className='input-area'>{ formData } </div>
          </div>
          <button className='form-btn'>Submit</button>
        </form>
      </section>
    )
  }

  render() {
    let formData
    const { blood, height, weight, bps, bpd, hr, date, time, ap, type, provider, clinic, phone, address, kind, specialty, insuranceType, polNum, notes} = this.state

    switch (this.props.type) {
      case 'profile' :
        formData = (
          <div className='form-info'>
            Height: <input placeholder='Height' value={height} onChange={(event) => this.setState({height: event.target.value})}/> 
            <br/>
            Weight: <input placeholder='Weight' value={weight} onChange={(event) => this.setState({weight: event.target.value})}/> 
            <br/>
            Blood Pressure: <input placeholder='Systolic' value={bps} onChange={(event) => this.setState({bps: event.target.value})}/> / <input placeholder='Diastolic' value={bpd} onChange={(event) => this.setState({bpd: event.target.value})}/> 
            <br/>
            Heart Rate: <input placeholder='Heart Rate' value={hr} onChange={(event) => this.setState({hr: event.target.value})}/> 
            <br/>
            Blood Type: <input placeholder='Blood Type' value={blood} onChange={(event) => this.setState({blood: event.target.value})}/> 
          </div>
        )
        return this.informationSubmission(formData)
      case 'appointments' :
        formData = (
          <div className='form-info'>
            Date: <input placeholder='Date' value={date} onChange={(event) => this.setState({date: event.target.value})}/> 
            <br/>
            Time: <input placeholder='Time' value={time} onChange={(event) => this.setState({time: event.target.value})}/> <input placeholder='am/pm' value={ap} onChange={(event) => this.setState({ap: event.target.value})}/> 
            <br/>
            Type of Appointment: <input placeholder='Type of Appointment' value={kind} onChange={(event) => this.setState({kind: event.target.value})}/> 
            <br/>
            Provider: <input placeholder='Provider' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/> 
            <br/>
            <textarea rows='10' col='6' wrap placeholder='Add Appointment Notes Here' value={notes} onChange={(event) => this.setState({notes: event.target.value})}/> 
          </div>
        )
        return this.informationSubmission(formData)
      case 'providers' :
        formData = (
          <div className='form-info'>
            Provider Name: <input placeholder='Provider Name' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/> 
            <br/>
            Clinic Name: <input placeholder='Clinic Name' value={clinic} onChange={(event) => this.setState({clinic: event.target.value})}/> <input placeholder='am/pm' value={ap} onChange={(event) => this.setState({ap: event.target.value})}/> 
            <br/>
            Phone Number: <input placeholder='Phone Number' value={phone} onChange={(event) => this.setState({phone: event.target.value})}/> 
            <br/>
            Address: <input placeholder='Address' value={address} onChange={(event) => this.setState({address: event.target.value})}/> 
            <br/>
            Specialty: <input placeholder='Specialty' value={specialty} onChange={(event) => this.setState({specialty: event.target.value})}/>
          </div>
        )
        return this.informationSubmission(formData)
      case 'insurance' :
        formData = (
          <div className='form-info'>
            Insurance Type: <input placeholder='Insurance Type' value={insuranceType} onChange={(event) => this.setState({insuranceType: event.target.value})}/> 
            <br/>
            Insurance Policy Number: <input placeholder='Insurance Policy Number' value={polNum} onChange={(event) => this.setState({polNum: event.target.value})}/>
          </div>
        )
        return this.informationSubmission(formData)
      default:
        return ('hit schedule default')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointments,
    provider: state.providers,
    insurance: state.insurance,
    profile: state.profile,
    isLoading: state.isLoading,
    errorMessage: errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAppointmentSubmit: (text => {
      dispatch(addAppointment(text))
    }),
    handleProviderSubmit: (text => {
      dispatch(addProvider(text))
    }),
    handleInsuranceSubmit: (text => {
      dispatch(addInsurance(text))
    }),
    handleProfileSubmit: (text => {
      dispatch(addProfile(text))
    }),
  }
}


Schedule.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
