import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'

class Display extends Component {

  returnJsx (btnName, responseArray) {
    let info = responseArray.map(arrayItem => {
      return <Card {...arrayItem} type={this.props.type} key='arrayItem.name'/>
    })

    return (
      <div className='display-container'>
        <button className='add-btn'> { btnName } <i className="far fa-plus-square"></i></button>
        <div className='card-area'> { info } </div>
      </div>
    )
  }

  render () {
    let url
    let btnName
    let responseArray

    switch (this.props.type) {
      case 'profile' : 
        url = 'url to get profile'
        // await this.props.fetchProfile(url)
        btnName = 'Update Profile'
        responseArray = [{blood: 'A+', height: '5,7', weight: '170', bps: '120', bpd: '80', hr: '60' }]
        return this.returnJsx(btnName, responseArray)

      case 'appointments' : 
        url = 'url for get all appointments'
        // await this.props.fetchAppointments(url)
        btnName = 'Add Appointment'
        responseArray = [{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'},{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'}]
        return this.returnJsx(btnName, responseArray)

      case 'providers' : 
        url = 'url for get all providers'
        // await this.props.fetchProviders(url)
        btnName = 'Add Provider'
        responseArray = [{name: 'DDS. Bob FeelGood', clinic: 'Green Clinic', address: '123 Red Road, Greenville, SC 12345', phone: '234-234-2313', speciality: 'Cardio'}, {name: 'Dr. Sue Happy', clinic: 'Red Clinic', address: '4444 Shadow Lane, Daytona, FL 78987', phone: '674-234-6783', speciality: 'Orthodontics'} ]
        return this.returnJsx(btnName, responseArray)

      case 'insurance' : 
        url = 'url for get all insurance'
        // await this.props.fetchInsurance(url)
        btnName = 'Add Insurance'
        responseArray = [{card: 'Doctor', image: ':-)'}, {card: 'Dentist', image: ':-0'}]
        return this.returnJsx(btnName, responseArray)

      default:
        return ('hit display default')
    }
  }
}

Display.propTypes = {
  type: PropTypes.string
}

export default Display;