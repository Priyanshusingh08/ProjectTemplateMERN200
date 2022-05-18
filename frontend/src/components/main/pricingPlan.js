import { Button } from "@mui/material";
import React, { useState } from "react";
import app_config from "../../config";

const PricingPlan = () => {
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("owner"))
  );

  const plans = [
    {
      name: "Starter",
      price: 99,
      validity: 6,
      features: [
        "Up to 100 slots",
        "Basic Support",
        "Monthly Updates",
        "Free Cancellation",
        "Manual Tracking",
      ],
    },
    {
      name: "Advanced",
      price: 189,
      validity: 12,
      features: [
        "Up to 100 slots",
        "Basic Support",
        "Monthly Updates",
        "Free Cancellation",
        "Manual Tracking",
      ],
    },
    {
      name: "Enterprise",
      price: 199,
      validity: 36,
      features: [
        "Up to 100 slots",
        "Basic Support",
        "Monthly Updates",
        "Free Cancellation",
        "Manual Tracking",
      ],
    },
  ];

  const purchasePlan = (plan) => {
    fetch(url + "/plan/add", {
      method: "POST",
      body: JSON.stringify(plan),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json((data) => {
          console.log(data);
          fetch(url + "/owner/pushupdate/" + currentUser._id, {
            method: "PUT",
            body: JSON.stringify({ plans: data._id }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                console.log(data);
              });
            }
          });
        });
      }
    });
  };

  const showPlans = () => {
    return plans.map(({ name, price, validity, features }) => (
      <div className="card card-pricing text-center px-3 mb-4">
        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
          {name}
        </span>
        <div className="bg-transparent card-header pt-4 border-0">
          <h1
            className="h1 font-weight-normal text-primary text-center mb-0"
            data-pricing-value="15"
          >
            $<span className="price">{price}</span>
            <span className="h6 text-muted ml-2">/ per {validity} month</span>
          </h1>
        </div>
        <div className="card-body pt-0">
          <ul className="list-unclassNameNamed mb-4">
            {features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary mb-3 hvr"
            onClick={(e) => purchasePlan({ name, price, validity, features })}
          >
            Purchase Now
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="pricing card-deck flex-column flex-md-row mb-3">
        {showPlans()}
      </div>
    </div>
  );
};

export default PricingPlan;
