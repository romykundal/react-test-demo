import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oBj: {}
        }

    }

    componentWillMount() {

        axios.get('/data.json')
            .then(response => {
                this.setState({
                    oBj: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    onChangeName = (event) => {
        let oBj = { ...this.state.oBj,
            name: event.target.value
        };
        this.setState({
            oBj
        })
    }
    onChangeType = (event) => {
        let oBj = { ...this.state.oBj,
            type: event.target.value
        };
        this.setState({
            oBj
        })
    }
    onChangeCountry = (event) => {
        let oBj = { ...this.state.oBj,
            country: event.target.value
        };
        this.setState({
            oBj
        })

    }

    render() {
        
        return ( <
            div className = "col-md-6 main-contaner" >
            <
            form className = "form-horizontal" >
            <
            div className = "form-group" >
            <
            div className = "col-md-4 ft-l" > Name: < /div> <
            div className = "col-md-8 ft-l" >
            <
            input ref = "name"
            type = "text"
            className = "form-control"
            onChange = {
                (name) => this.onChangeName(name)
            }
            value = {
                this.state.oBj.name
            }
            id = "name"
            placeholder = "Enter Name" / >
            <
            /div> <
            /div> <
            div className = "form-group" >
            <
            div className = "col-md-4 ft-l" > Type of Contract: < /div> <
            div className = "col-md-8 ft-l" >
            <
            label className = "radio-inline" >
            <
            input type = "radio"
            name = "consultant"
            onChange = {
                this.onChangeType.bind(this)
            }
            checked = {
                this.state.oBj.type === "consultant"
            }
            value = "consultant" / > Consultant < /label> <
            label className = "radio-inline" >
            <
            input type = "radio"
            name = "permanent"
            onChange = {
                this.onChangeType.bind(this)
            }
            checked = {
                this.state.oBj.type === "permanent"
            }
            value = "permanent" / > Permanent < /label> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            div className = "col-md-4 ft-l" > Country of Residence: < /div> <
            div className = "col-md-8 ft-l" >
            <
            select onChange = {
                this.onChangeCountry.bind(this)
            }
            value = {
                this.state.oBj.country
            }
            id = "country"
            name = "country" >
            <
            option value = "uk" > United kingdom < /option> <
            option value = "in" > India < /option> <
            /select> <
            /div> <
            /div>

            <
            /form> <
            /div>
        )


    }
}

export default User;