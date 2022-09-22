import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

class ListContacts extends React.Component {
    constructor(props) {
        super(props);
        let name, phone, email, arr = [];
        name = '';
        phone = '';
        email = '';
        this.arr = arr
        this.name = name;
        this.email = email;
        this.phone = phone;

        this.state = {
            contacts: arr,
            name: name,
            phone: phone,
            email: email

        }

        this.ShowForm = this.ShowForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeContact = this.handleChange.bind(this);
        this.ShowContacts = this.ShowContacts.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    handleChange(event) {
        switch (event.target.id){
            case 'name': return this.setState({name:event.target.value});
            case 'phone':return this.setState({phone:event.target.value});
            case 'email':return this.setState({email:event.target.value});
        }
    }

    addContact() {
        this.arr.push({
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email
        })
        this.setState({contacts:this.arr, name:'', phone:'', email:''})

    }

    removeContact(event) {

    }

    ShowContacts() {

    }

    ShowForm() {
        let divStyle, formStyle, titleStyle, formWithTitle, divSeparator;
        divStyle = {
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50vh",
            alignItems: "center"
        }
        formStyle = {
            width: "300px",
            height: "40px"
        }
        titleStyle = {
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "solid 2px black",
            marginBottom: "20px",
        }
        formWithTitle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        }
        divSeparator = {
            width:"auto",
            borderRight: "solid 2px black",
        }


        return (<div>
            <div style={divSeparator}>
                <div style={titleStyle}>
                    <h1> Добавить</h1>
                </div>
                <div style={divStyle}>
                    <div style={formWithTitle}>
                        <h2>Имя</h2>
                        <input style={formStyle} value={this.state.name} type={"text"} onChange={this.handleChange} id={"name"}/>
                    </div>
                    <div style={formWithTitle}>
                        <h2>Телефон</h2>
                        <input style={formStyle} value={this.state.phone} type={"text"} onChange={this.handleChange} id={"phone"}/>
                    </div>
                    <div style={formWithTitle}>
                        <h2>Электронная почта</h2>
                        <input style={formStyle} value={this.state.email} type={"email"} onChange={this.handleChange} id={"email"}/>
                    </div>
                    <button style={formStyle} onClick={this.addContact}><h2>Добавить</h2></button>
                </div>
            </div>
        </div>);

    }


    render() {
        return (
            <this.ShowForm/>
        );
    }
}

export default ListContacts;


reportWebVitals();