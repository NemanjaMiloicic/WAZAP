import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import PaymentSuccessForm from '../../components/PaymentForms/PaymentSuccessForm/PaymentSuccessForm';

export const PaymentSuccess = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const easyChairIDs = queryParams.getAll('easyChairIDs');
    const date = queryParams.get('date');
    const paymentToken = queryParams.get('token');

    const reqID = queryParams.get('reqID');
    const typeOfCard = queryParams.get('typeOfCard');
    const uverenje = queryParams.get('uverenje');


  return (
    <PaymentSuccessForm easyChairIDs={easyChairIDs} date={date} paymentToken={paymentToken}
                        reqID={reqID} typeOfCard={typeOfCard} uverenje={uverenje}/>
  )
}
