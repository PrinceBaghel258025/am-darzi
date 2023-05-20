const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: Number,
      price: Number
    }
  ],
  paymentMethod: {
    type: String,
    enum: ['COD', 'Online'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Placed', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Placed'
  },
  total: {
    type: Number,
    required: true
  },
//   tax: {
//     type: Number,
//     required: true
//   },
  discount: {
    type: Number,
    default: 0
  },
  shippingFee: {
    type: Number,
    required: true
  },
//   notes: {
//     type: String,
//     default: ''
//   },
  deliveryDate: {
    type: Date,
    default: null
  },
//   isGift: {
//     type: Boolean,
//     default: false
//   },
//   giftMessage: {
//     type: String,
//     default: ''
//   },
//   referralCode: {
//     type: String,
//     default: ''
//   }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;