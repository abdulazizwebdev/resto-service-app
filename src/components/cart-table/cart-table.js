import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';

const CartTable = ({items, deleteFromCart}) => {
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
                                    <button className="btn btn__add">Add</button>
                                </div>
                                <div className="cart__item-button">
                                    <button className="btn btn__remove">Remove</button>
                                </div>
                                <div className="cart__close" onClick={() => deleteFromCart(id)}>&times;</div>
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
    deleteFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);