import { Button } from "@mui/material";
import React from "react";

const PricingPlan = () => {
  return (
    <div className="container mb-5 mt-5">
    <div className="pricing card-deck flex-column flex-md-row mb-3">
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span className="price">3</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unclassNameNamed mb-4">
                    <li>Up to 5 users</li>
                    <li>Basic support</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" className="btn btn-outline-secondary mb-3 hvr">Order now</button>
            </div>
        </div>
        <div className="card card-pricing popular shadow text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span className="price">6</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unclassNameNamed mb-4">
                    <li>Up to 10 users</li>
                    <li>Email Support support</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <a href="#" target="_blank" className="btn btn-primary mb-3">Order Now</a>
            </div>
        </div>
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span className="price">9</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unclassNameNamed mb-4">
                    <li>Up to 15 users</li>
                    <li>Email & phone support</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" className="btn btn-outline-secondary mb-3 hvr">Order now</button>
            </div>
        </div>
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="60">$<span className="price">12</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unclassNameNamed mb-4">
                    <li>Up to 20 users</li>
                    <li>Basic support</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" className="btn btn-outline-secondary mb-3 hvr">Order now</button>
            </div>
        </div>
    </div>
</div>

  );
};

export default PricingPlan;
