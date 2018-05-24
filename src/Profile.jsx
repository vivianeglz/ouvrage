import React from 'react';
import moment from 'moment';

const EditBtn = props => (<button onClick={props.handleClick}>Modifier</button>);

export default class Profile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      edit: false,
      birthdate: moment(this.props.birthdate).format('YYYY-MM-DD')
    };

    this.handleUpdating = this.handleUpdating.bind(this);
  }

  handleUpdating () {
    this.setState({ edit: !this.state.edit });
  }

  handleSubmit (event) {
    event.preventDefault();
    let firstName = event.target.elements.first_name.value,
      lastName = event.target.elements.last_name.value,
      username = event.target.elements.username.value,
      email = event.target.elements.email.value,
      birthdate = event.target.elements.birthdate.value,
      idStudent = event.target.elements.id_student.value;
    console.log('Edit asked. Values : ');
    console.log('firstname : ' + firstName);
    console.log('lastname : ' + lastName);
    console.log('username : ' + username);
    console.log('email : ' + email);
    console.log('birthdate : ' + birthdate);
  }

  render () {
    const {id, first_name, last_name, username, email, avatar} = this.props.student;

    return (
      <div>
        <div className="wrap-header">
          <h1 className="title">{first_name} {last_name}</h1>
          <EditBtn handleClick={this.handleUpdating} />
        </div>
        <div className="wrap-content">
          {this.state.edit ? (
            <form className="content" onSubmit={this.handleSubmit}>
              <input name="id_student" type="hidden" value={id}/>
              <div>
                <label>Prénom</label>
                <input type="text" id="first_name" name="first_name" defaultValue={first_name}/>
              </div>
              <div>
                <label>Nom de famille</label>
                <input type="text" id="last_name" name="last_name" defaultValue={last_name}/>
              </div>
              <div>
                <label>Username</label>
                <input type="text" id="username" name="username" defaultValue={username}/>
              </div>
              <div>
                <label>Adresse e-mail</label>
                <input type="email" id="email" name="email" defaultValue={email}/>
              </div>
              <div>
                <label>Date de naissance</label>
                <input type="date" id="birthdate" name="birthdate" defaultValue={this.state.birthdate}/>
              </div>
              <input type="submit" value="Submit"/>
            </form>
          ) : (
            <div>
              <div className="avatar">
                <img src={avatar} alt="avatar"/>
              </div>
              <div className="content">
                <p>{first_name}  {last_name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{this.state.birthdate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
