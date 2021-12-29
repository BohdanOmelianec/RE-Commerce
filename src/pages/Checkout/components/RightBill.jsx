import React, { useContext } from 'react';
import { Button, Card, Row, Col, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../../utils/providers/GlobalContext';


const Rightbill = () => {
  const { state } = useContext(GlobalContext);
  const total = state.productsInCart.map(item => {
    return item.price * item.quantity
  }).reduce((a, b) => a + b)

  return (
    <>
      <Card className="checkout-card">
        <h2 className="checkout-form-title">your order</h2>
        <Row justify="space-between" className='checkout-row'>
          <Col>
            <p>Product</p>
          </Col>
          <Col>
            <p>Total</p>
          </Col>
        </Row>
        <hr />
        {state.productsInCart.map(item => (
          <Row justify="space-between" className='checkout-row'>
            <Col>
              <p>{item.name} x {item.quantity}</p>
            </Col>
            <Col>
              <p>${item.price * item.quantity}</p>
            </Col>
          </Row>
        ))}
        <hr />
        <Row justify="space-between" className='checkout-row'>
          <Col>
            <p>Subtotal</p>
          </Col>
          <Col>
            <p>${total}</p>
          </Col>
        </Row>
        <Row justify="space-between" className='checkout-row'>
          <Col>
            <p>Shipping</p>
          </Col>
          <Col>
            <p>Free Shipping</p>
          </Col>
        </Row>
        <hr />
        <Row justify="space-between" className='checkout-row checkout-total'>
          <Col>
            <p>Total</p>
          </Col>
          <Col>
            <p>${total}</p>
          </Col>
        </Row>
      </Card>
      <Card className="checkout-card">
        <div className="checkout-payment-block">
          <Checkbox>Direct Bank Transfer</Checkbox>
          <div className="checkout-payment">
            <p>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
              order won’t be shipped until the funds have cleared in our account.
            </p>
          </div>
          <Checkbox>Cheque Payment</Checkbox>
          <div>
            <Checkbox>PayPal</Checkbox>
          </div>
        </div>
      </Card>

      <NavLink to="/checkout">
        <Button
          className="cart-form-btn"
          size="large"
          type="primary"
          style={{ width: 'fit-content', float: 'right' }}
          htmlType="submit">
          PROCEED TO CHECKOUT
        </Button>
      </NavLink>
    </>
  );
};

export default Rightbill;
