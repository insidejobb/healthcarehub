import React, { Fragment } from "react";
import "./Homepage.css";
import TokenIcon from "@mui/icons-material/Token";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Homepage = () => {
  const monthsData = [
    { month: "January", value: 40 },
    { month: "February ", value: 70 },
    { month: "March", value: 20 },
    { month: "April", value: 50 },
    { month: "May", value: 65 },
    { month: "june", value: 0 },
    { month: "july", value: 60 },
    { month: "Agust", value: 0 },
    { month: "sept", value: 60 },
    { month: "Oct", value: 70 },
    { month: "nov", value: 0 },
    { month: "Dec", value: 90 },
    // Add more months' data here...
  ];
  return (
    <Fragment>
      <div className="homebox">
        <div className="sidebar">
          <span className="top">
            <TokenIcon />
            <h4>DashBoard</h4>
          </span>

          <span className="main-span">
            <DashboardIcon />
            <h5>Dashboard</h5>
          </span>
          <span className="centered-span">
            <ProductionQuantityLimitsIcon />
            <h5>product</h5>
            <ChevronRightIcon />
          </span>
          <span className="centered-span">
            <SupportAgentIcon />
            <h5>Customers</h5>
            <ChevronRightIcon />
          </span>
          <span className="centered-span">
            <PaidIcon />
            <h5>Income</h5>
            <ChevronRightIcon />
          </span>
          <span className="centered-span">
            <PublishedWithChangesIcon />
            <h5>Promote</h5>
            <ChevronRightIcon />
          </span>
          <span className="centered-span">
            <HelpOutlineIcon />
            <h5>Help</h5>
            <ChevronRightIcon />
          </span>
          <span className="avatharam">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
            <div>
              <h6>M.Bhavani</h6>
              <p>Frontend Developer</p>
            </div>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className="mainSection">
          <div className="hello">
            <p>Hello...Bhavani</p>
            <input type="text" placeholder="serch" />
            <span className="icon">
              <SearchIcon />
            </span>
          </div>
          <div className="fourcontainers">
            <div className="cardholder">
              <div className="imagepart">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8LDeLS5rtC7ITgEMNbDvOl7QIWtzA8017g&usqp=CAU"
                  alt="pic1"
                />
              </div>
              <div className="text">
                <p>Earings</p>
                <h6>$200</h6>
                <p>
                  <ArrowUpwardIcon />
                  22.98 <h6>This month</h6>
                </p>
              </div>
            </div>
            <div className="cardholder">
              <div className="imagepart">
                <img
                  src="https://png.pngtree.com/png-vector/20190623/ourmid/pngtree-documentfilepagepenresume-flat-color-icon-vector-png-image_1491048.jpg"
                  alt="pic1"
                />
              </div>
              <div className="text">
                <p>Earings</p>
                <h6>$200</h6>
                <p>
                  <ArrowUpwardIcon />
                  22.98 <h6>This month</h6>
                </p>
              </div>
            </div>
            <div className="cardholder">
              <div className="imagepart">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcaLVUOAxAap2sEoZ8LjCq091_ZDohbilXQ&usqp=CAU"
                  alt="pic1"
                />
              </div>
              <div className="text">
                <p>Earings</p>
                <h6>$200</h6>
                <p>
                  <ArrowUpwardIcon />
                  22.98 <h6>This month</h6>
                </p>
              </div>
            </div>
            <div className="cardholder">
              <div className="imagepart">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/25/63/25/1000_F_225632546_XYW8FbzYXvdpLWpOlbJvSJD7cha2ZZmx.jpg"
                  alt="pic1"
                />
              </div>
              <div className="text">
                <p>Earings</p>
                <h6>$200</h6>
                <p>
                  <ArrowUpwardIcon />
                  22.98 <h6>This month</h6>
                </p>
              </div>
            </div>
            <div className="grap">
              <div className="bar-graph-container">
                <h5 className="top-left-heading">Overview</h5>

                <div className="bar-graph">
                  {monthsData.map((month, index) => (
                    <div
                      key={index}
                      className={`bar ${month.value === 0 ? "zero-value" : ""}`}
                      style={{ height: `${month.value}%` }}
                    >
                      {month.month}
                      <div className="value">{`${month.value}%`}</div>
                    </div>
                  ))}
                  <h5 className="top-right-heading">
                    Quarterly <KeyboardArrowDownIcon />
                  </h5>
                </div>
              </div>
              <div className="sixtyfive">
                <div>
                  <h6>Customers</h6>
                  <p>customers buy products</p>
                </div>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/86/51/66/500_F_286516613_ZrBPcBT2AsssKEp6ntu1Ng1kuE07AmoZ.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="bottom">
              <span className="icon">
                <h5>product cell</h5>
                
                <input type="text" placeholder="serch" />
                <span className="serch">
              <SearchIcon />
            </span>
            <p>Last 30days  <KeyboardArrowDownIcon /></p>
              </span>
              <div className="product">
                <h5>ProductName</h5>
                <p className="stoke">Stock</p>
                <p>Price</p>
                <p>Total</p>
              </div>
              </div>
              <div className="picturecontainer">
                <span>
                  <img src='https://img.freepik.com/premium-photo/3d-rendering-abstract-blue-crystal-background_167650-2403.jpg?w=2000' alt='pic'/>
                  <div className="this">
                  <h5>Abstract 3D</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                <div className="producttext">
                <p className="p">32 in Stock</p>
                <p className="pp">$48.99</p>
                <p className="ppp">20</p>
              </div>

                </span>
              </div>
              <div className="picturecontainer">
                <span>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iY6oL85kwYOq8VLtGN_OAc8N5Z5_GrPj-ax7Nc8z9m_YhUtqqnEgMiNWCuIFIJf7DNA&usqp=CAU' alt='pic'/>
                  <div className="this">
                  <h5>Surphens </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                <div className="producttext">
                <p className="p">24 in Stock</p>
                <p className="pp">$29.79</p>
                <p className="ppp">20</p>
              </div>

                </span>
              </div>
              <div className="picturecontainer">
                <span>
                  <img src='https://img.freepik.com/premium-photo/3d-rendering-abstract-blue-crystal-background_167650-2403.jpg?w=2000' alt='pic'/>
                  <div className="this">
                  <h5>Maked</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                <div className="producttext">
                <p className="p">28 in Stock</p>
                <p className="pp">$34.59</p>
                <p className="ppp">20</p>
              </div>

                </span>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
