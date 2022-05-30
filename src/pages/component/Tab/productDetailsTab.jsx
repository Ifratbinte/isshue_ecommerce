import React, { Component } from 'react'

class Tabs extends Component{

    state ={
      activeTab: this.props.children[0].props.label
    }

    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };

    render(){
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
            <div className="tab-content">
              {content}
            </div>
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className="tab-buttons">
        {buttons.map(button =>{
            return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
        })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }

class ProductDetailsTab extends Component {
    
    render(){
      return(
        <div className="tabs">
            <Tabs>
                <Tab label="Review">
                  <h3 className="title mb-4">Ratings and Reviews</h3>
                  <div className="row">
                      <div className="col-sm-6">
                          <div className="rating-block-wrapper">
                            <div className="rating-position">
                                <div className="rating-dimension d-flex mb-2">
                                    <div className="rating-quantity d-flex align-items-center mr-2">5    
                                        <div className="star-rating ml-1 mb-0">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="rating-percent w-100 mr-2">
                                        <div className="progress">
                                            <div className="progress-bar bg-success details-w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="user-rating">100%</div>
                                </div>
                                <div className="rating-dimension d-flex mb-2">
                                    <div className="rating-quantity d-flex align-items-center mr-2">4                                    
                                        <div className="star-rating ml-1 mb-0">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="rating-percent w-100 mr-2">
                                        <div className="progress">
                                            <div className="progress-bar bg-info  details-w-80" role="progressbar"aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="user-rating">75%</div>
                                </div>
                                <div className="rating-dimension d-flex mb-2">
                                    <div className="rating-quantity d-flex align-items-center mr-2">3
                                        <div className="star-rating ml-1 mb-0">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="rating-percent w-100 mr-2">
                                        <div className="progress">
                                            <div className="progress-bar bg-warning details-w-60" role="progressbar"aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="user-rating">55%</div>
                                </div>
                                <div className="rating-dimension d-flex mb-2">
                                    <div className="rating-quantity d-flex align-items-center mr-2">2   
                                        <div className="star-rating ml-1 mb-0">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="rating-percent w-100 mr-2">
                                        <div className="progress">
                                            <div className="progress-bar bg-primary details-w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="user-rating">40%</div>
                                </div>
                                <div className="rating-dimension d-flex">
                                    <div className="rating-quantity d-flex align-items-center mr-2">1 
                                        <div className="star-rating ml-1 mb-0">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="rating-percent w-100 mr-2">
                                        <div className="progress">
                                            <div className="progress-bar bg-danger details-w-20" role="progressbar"aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                                <span className="sr-only">20% Complete (primary)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-rating">25%</div>
                                </div>
                            </div>
                          </div>
                        </div>
                      <div className="col-sm-6 pl-lg-5 rightSidebar">
                          <div className="review-content mb-5">
                              <form action="" className="review-form">                                                                                                   
                                  <div className="review-product-info">
                                      <h4 className="review-product-name">Cap -Custom 3D Embroidery Promotional Baseball Caps</h4>
                                      <div className="review-product-brand">Women's fashion</div>
                                  </div>
                                  <div className="form-group">
                                      <label>Review <span>*</span></label>
                                      <textarea className="form-control" placeholder="Review"name="review_msg" id="review_msg" rows="5"></textarea>
                                  </div>
                                  <button type="submit"className="btn button-primary submit-review">Send Your Review</button>
                              </form>                    
                          </div>
                      </div>
                  </div>
                </Tab>
                <Tab label="Specification">
                    <p className="tab-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna erat. Nullam at ex ex. Donec convallis pulvinar lorem, finibus rutrum ante tincidunt nec. Phasellus quam ex, venenatis nec est in, malesuada tempus magna. Quisque quis varius turpis, sed vestibulum nisl. Vivamus quis mauris vel lacus volutpat facilisis. Nam vel erat blandit dolor commodo bibendum. Morbi eu nibh eget urna tincidunt vestibulum. Quisque fringilla eros risus, vel sagittis dolor imperdiet volutpat. Praesent convallis condimentum aliquam. Curabitur vel eros sit amet quam maximus consectetur posuere eu sem. Praesent tempor magna sed posuere interdum.Phasellus egestas risus risus, nec porta sem commodo a. Ut eget velit at turpis blandit aliquet. Donec eu gravida massa, commodo eleifend nunc. Nam fermentum non diam.</p>
                </Tab>
                <Tab label="Description">
                    <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                        <p className="tab-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna erat. Nullam at ex ex. Donec convallis pulvinar lorem, finibus rutrum ante tincidunt nec. Phasellus quam ex, venenatis nec est in, malesuada tempus magna. Quisque quis varius turpis, sed vestibulum nisl. Vivamus quis mauris vel lacus volutpat facilisis. Nam vel erat blandit dolor commodo bibendum. Morbi eu nibh eget urna tincidunt vestibulum. Quisque fringilla eros risus, vel sagittis dolor imperdiet volutpat. Praesent convallis </p>
                    </div>
                </Tab>
                
            </Tabs>
        </div>
      )
    }
  }
  
export default ProductDetailsTab;