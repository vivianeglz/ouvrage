import React from 'react';
// import CreateProfil from './components/CreateProfil';
// import Profile from './Profile.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      student: this.props.students[2]
    };
  }

  render () {
    return (
      <div>
  {// <h1>Ouvrage</h1>
        // <CreateProfil />
        // <a href="index.jsx" title="Home page" className="logo">Ouvrage</a>
        // <Profile student={this.state.student}/>
  }
      </div>
    );
  }
}
