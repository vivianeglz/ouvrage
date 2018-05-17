import React from 'react';
import Joi from 'joi';

const schema = {
    first_name: Joi.string().required(),
    username: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthdate: Joi.string().isoDate(),
    avatar: Joi.string()
};

export default class CreateProfil extends React.Component {
    constructor () {
        super();

        this.state = {
            dataNewProfil: {
                first_name: '',
                username: '',
                last_name: '',
                email: '',
                birthdate: '',
                avatar: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.submit = this.submit.bind(this);
    }

    validate () {
        const newProfil = Joi.validate(this.state.dataNewProfil, schema);

        newProfil.then((value) => {
            console.log(value);
            return true;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
    }

    handleChange (event) {
        const field = event.target.getAttribute('name');

        const newValue = Object.assign({}, this.state.dataNewProfil);
        newValue[field] = event.target.value;

        this.setState({
            dataNewProfil: newValue
        });
    }

    submit () {
        if (this.validate()) {
            console.log('Creation profil validé');
        } else {
            console.log('ERROR creation profil');
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input name="first_name" type="text" placeholder="Firstname"
                           value={this.state.dataNewProfil.first_name}
                           onChange={this.handleChange}
                    />
                    <input name="username" type="text" placeholder="Username"
                           value={this.state.dataNewProfil.username}
                           onChange={this.handleChange}
                    />
                    <input name="last_name" type="text" placeholder="Lastname"
                           value={this.state.dataNewProfil.last_name}
                           onChange={this.handleChange}
                    />
                    <input name="email" type="email" placeholder="Email"
                           value={this.state.dataNewProfil.email}
                           onChange={this.handleChange}
                    />
                    <input name="birthdate" type="date" placeholder="Birthdate"
                           value={this.state.dataNewProfil.birthdate}
                           onChange={this.handleChange}
                    />
                    <input name="avatar" type="file"
                           value={this.state.dataNewProfil.avatar}
                           onChange={this.handleChange}
                    />
                </form>

                <button onClick={this.submit} >Add profil</button>
            </div>
        );
    }
}
