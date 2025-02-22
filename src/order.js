function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
        deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var itemList = []
  for (var i = 0; i < deliveryOrders.length; i ++) {
  itemList.push(deliveryOrders[i].item)
}
  return itemList.join(", ")
}

function searchOrder(deliveryOrders, orderItem) {
  var order = false
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].item === orderItem) {
    order = true
    }
  }
  return order
}


module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
