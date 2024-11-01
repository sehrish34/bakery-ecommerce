import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/slice/modal';
import { addToCart, removeFromCart } from '../../store/slice/cart';
import './style.css';
import Button from '../CustomButton/Button';
import { toastSucess } from '../../store/slice/toast';



function Modal() {
    const dispatch = useDispatch();
    const openingModal = useSelector((state) => state.modal);
    const cartItems = useSelector((state) => state.cart);
    const { open } = openingModal;
    const { data } = cartItems;

    const handleIncrement = (itemId) => {
        dispatch(addToCart({ item: { id: itemId } }));
    };

    const handleRemove = (itemId) => {
        dispatch(removeFromCart({ item: { id: itemId } }));
    };

    const handleConfirm = () => {

        dispatch(toastSucess({ text: 'Order Confirmation!' }));

        dispatch(closeModal());
    };

    if (!open) return null;

    const filteredData = data.filter(item => item.quantity > 0);

    return (
        <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Cart Details</h2>

                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <p className='item-name'>{item.name}</p>
                            <p className='item-price'>${item.price.toFixed(2)}</p>

                            <div className="quantity-controls">
                                <button className="quantity-button-red" onClick={() => handleRemove(item.id)}>-</button>
                                <span className="quantity-display">{item.quantity || 0}</span>
                                <button className="quantity-button-green" onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-color'>Cart is empty</p>
                )}
                <div className="modal-buttons">
                    <Button onClick={handleConfirm} title="Confirm" />
                    <Button onClick={() => dispatch(closeModal())} title="Close" style={{ backgrounColor: 'black' }} />
                </div>
            </div>
        </div>
    );
}

export default Modal;