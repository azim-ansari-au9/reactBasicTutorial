import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./coupanOffer/product.css";
import coupanList from './coupanOffer/coupan.json';

function Coupan() {
    const coupon = coupanList
    const [newoup, setNewCoup] = useState([])

    const redeemCoupan = (e) => {
        e.preventDefault()
        const coup = e.target.inp.value
        const checkCoup = coupon.filter(x => x.code === coup)
        setNewCoup(checkCoup)
        if (checkCoup.length === 0) {
            alert("Not a valid coupan");
            return;
        } else {
            alert("You got the discount")
        }
    };

    return (
        <>
            <div>
                Category
        <br />
                <div className="sidebar">
                    <Link className="active" to="#electronics">
                        Electronics </Link>
                    <Link to="#clothes">Clothes</Link>
                    <Link to="#laptops">Laptops</Link>
                </div>
                <div className="content">
                    <div class="container">
                        <div class="cards card_outer">
                            <div class="card">
                                <div class="bottom content">
                                    {newoup.length !== 0 ? <h1> Valid Coupon</h1> : ""}
                                    <small>Sponsored</small>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s,
                                    </p>
                                    <form onSubmit={redeemCoupan}>
                                        <input
                                            className="coupan"
                                            placeholder="Coupan Code"
                                            type="text"
                                            required={true}
                                            name="inp"
                                        />
                                        <input type="submit" />
                                    </form>
                                    <br />
                                    Redeem Coupan
                                </div>
                            </div>
                            <div class="card">
                                <div class="bottom content">
                                    <small>Sponsored</small>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s,
                                    </p>
                                    <form onSubmit={redeemCoupan}>
                                        <input
                                            className="coupan"
                                            placeholder="Coupan Code"
                                            type="text"
                                            required={true}
                                            name="inp"
                                        />
                                        <input type="submit" />
                                    </form>
                                    <br />
                                     Redeem Coupan
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coupan;
