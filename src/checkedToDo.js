import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

class checkedToDo extends React.Component {
    constructor(props) {
        super(props);
        let arr=[];
        this.arr=arr;



        this.state = {note:this.arr};

        this.ShowForm = this.ShowForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkedForm=this.checkedForm.bind(this);

    }

    handleChange(event) {

        if(event.code==="Enter"){
            let obj={
                name:event.target.value,
                check:false
            };
            this.arr.push(obj);
            this.setState({note:this.arr})

        }

    }

    checkedForm(event){
        if(event.target.checked===true){
            this.arr[event.target.dataset.id].check=true;
        }
        else this.arr[event.target.dataset.id].check=false;
        this.setState({note:this.arr})
    }

    ShowForm(){
        let listStyle={
            display:"flex",
            flexDirection:"column"
        }
        return (
            <>
                <div style={listStyle}>
                    <input type={"text"} style={{width:"100px"}} onKeyUp={this.handleChange}/>
                    <p>Выполнен</p>
                    {this.state.note.map((item,index)=>{
                        if(item.check===true){
                            return (<p><input type={"checkbox"} checked={item.check} onChange={this.checkedForm} data-id={index}/>{item.name}</p>);
                        }
                    })}
                    <p>Не выполнен</p>
                    {this.state.note.map((item,index)=>{
                        if(item.check===false){
                            return (<p><input type={"checkbox"} checked={item.check} onChange={this.checkedForm} data-id={index}/>{item.name}</p>);
                        }
                    })}

                </div>
            </>
        );
    }

    render() {
        return (
            <>
                <this.ShowForm/>
            </>
        );
    }
}

export default CheckedToDo;


reportWebVitals();