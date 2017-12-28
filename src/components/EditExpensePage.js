import React from 'react';
import ReactDOM from 'react-dom';


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
       This is my edit component
       <p>currently editing the expense with the id  of {props.match.params.id}</p>
        </div>
    )

}
    

export default EditExpensePage;
