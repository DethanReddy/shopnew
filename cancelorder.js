const axios = require('axios');

const orderId = 'your_order_id';
const cancelReason = 'Customer request';

const cancelOrder = async () => {
  try {
    const response = await axios.post('your_cancel_endpoint', {
      orderId,
      cancelReason,
    });

    console.log('Order canceled successfully:', response.data);
  } catch (error) {
    console.error('Error canceling order:', error.message);
  }
};

cancelOrder();