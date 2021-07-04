import React, {useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {

    (async () => {
      const { data } = await axios.get('https://60dec4a4abbdd9001722d024.mockapi.io/orders');
      console.log(data);
    })();
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {[].map((item, index) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Orders;
