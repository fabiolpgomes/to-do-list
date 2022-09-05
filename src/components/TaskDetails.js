import React from 'react';
import { useHistory, useParams } from "react-router-dom";

import Button from './Button';
import './TaskDetails.css';

const Taskdetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

 // console.log(params);
    return ( 
        <>
          <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Return</Button>
          </div> 
          <div className="task-details-container">
            <h2>{params.tasktitle}</h2>
            <p>
            Lorem15jgfjfagjkfajkfjlgfjalfa
            dggdsjdjSAFDJKDFkjfdkHFDfddDFHdf
            </p>
          </div>


        </>
     );
}
 
export default Taskdetails;