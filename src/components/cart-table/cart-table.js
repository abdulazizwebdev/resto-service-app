import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromList, addedToCart, deleteItemFromCart} from '../../actions';

const CartTable = ({items, deleteFromList, addedToCart, deleteItemFromCart}) => {
    if (items.length === 0) {
        return (
            <div className="cart__title"> Ваша корзина пуста :( </div>
        )
    }
   
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, id, url, pcs} = item;
                        return (
                            <div className="cart__item" key={id}>
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ x {pcs}</div>
                                <div className="cart__item-button">
                                    <button onClick={() => addedToCart(item.id)} className="btn btn__add">+</button>
                                </div>
                                <div className="cart__item-button">
                                    <button onClick={() => deleteItemFromCart(item.id)} className="btn btn__remove">-</button>
                                </div>
                                <div className="cart__close" onClick={() => deleteFromList(id)}>&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromList,
    addedToCart,
    deleteItemFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);