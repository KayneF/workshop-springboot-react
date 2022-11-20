import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(saleId : number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
            toast.info("SMS notification sent!");
        });
}

function NotificationButton( {saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notify" />
        </div>
    );
}
  
export default NotificationButton;
