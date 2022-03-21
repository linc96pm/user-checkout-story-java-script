const generateOrderId = (productId, userId) => `${userId ? `${userId}-` : ''}${productId && productId + '-'}${new Date().getTime()}`;

export default generateOrderId;
