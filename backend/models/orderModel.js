import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    User: { type: Schema.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
export default Order