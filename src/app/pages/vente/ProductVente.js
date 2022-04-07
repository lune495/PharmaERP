import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Trans } from 'react-i18next';
import bsCustomFileInput from 'bs-custom-file-input';
import { ProgressBar } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Input,

  Row,
  Col,
  Badge,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown
} from "reactstrap";

export class ProductVente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ok:"",
      categorie:[{nom:"Parfums"},{nom:"Test 1"},{nom:"Test 2"}],
      isOpen:false,
      isOpenCat:false,
      stock:[],
      id:0,show:false
    }
    
  }
 
  toggleStock=()=>{
    this.setState({isOpen:!this.state.isOpen})
   }
   toggleCat=()=>{
     this.setState({isOpenCat:!this.state.isOpenCat})
    }
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    bsCustomFileInput.init()
  }

  render() {
    return (
        <div>
          {this.state.ok}
         <div className="page-header">
          <h3 className="page-title"> Faire une vente</h3>
          <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/vente/mesvente/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Mes ventes</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
            <div className="card-header">
                <Row >
                  <Col md="9" className="text-left">
                  <form className="nav-link mt-0  mt-md-0 d-none d-lg-flex">
                      <input type="text" style={{borderRadius:50}} className="form-control" placeholder="Search products" />
                  </form>
                  </Col>
                  <Col md="3" className=" text-right">
                 
                  </Col>
                 
                </Row>
                </div>
              <div className="card-body">
              
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Catégorie</th>
                        <th>Quantité</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr>
                        <td>Messsy</td>
                        <td>Test 2</td>
                        <td><label className="badge badge-pill badge-success">10</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Choisir</button></span></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Test 3</td>
                        <td><label className="badge badge-pill badge-danger">1</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Choisir</button></span></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>Test</td>
                        <td><label className="badge badge-pill badge-success">100</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Choisir</button></span></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>test 1</td>
                        <td><label className="badge badge-pill badge-danger">2</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Choisir</button></span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <Form>
                  <h6 className="heading-small text-muted mb-4">
                    liste des produits achetés
                  </h6>
                  <div id="liste" className="pl-lg-4">
                  {/* {
                  [].concat(this.state.panier)
                  .sort((a, b) => a.index > b.index ? 1 : -1).map((element,idx) =>(
                     */}
                <div >  
                   <Row>

                     <Col md="5">
                     <Row> 
                  
                  <Col md="9">
                  <label 
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            nom :
                    </label> <span>{"Paracetamol"}</span>
                  </Col>
                 
                  
                </Row>
                <Row>
                <Col md="9">

                  <Row>
                   <Col md="1">
                      <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                quantité:
                      </label>
                      </Col>
                      <Col md="5" style={{marginLeft:"40px"}}>
                          <Input defaultValue={0} min="1" max="10000" type="number"   size="sm" />
                    </Col>
                 </Row>
                 </Col>
                </Row>
                <Row>
                <Col md="9">
                 <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Prix Unitaire :
                 </label> <span>{1000}</span>
                 </Col>
                </Row>
                <Row>
                <Col md="9">
                 <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Total :
                 </label> <span>{1000}</span>
               </Col>
                </Row>
                     </Col>
                     <Col md="4">
                     
                        <img  className="card-img-top" src={"http://localhost/file/fichiers/data/"} alt="Image"/>
                     
                     </Col>
                     <Col md="3">

                     <i  style={{fontSize:"xx-large", color:"red",cursor:"pointer"}} className="mdi mdi-close" />
                     </Col>
                   
                   </Row>
                  
                 
                          
                  <hr/>
                </div>
                
                {/* ))} */}
                 
                  <Row>
                  <Col md="6">
                    <h3>Totaux:</h3>   <Input
                            className="form-control-alternative"
                            readOnly
                            id="total"
                            defaultValue="0.0000 FCFA"
                            type="text"
                            style={{color:"black"}}
                          />
                   </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col md="6">
                        <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Montant Encaissé :
                      </label>
                      <Input
                            className="form-control-alternative"
                            id="encaisse"
                            // onChange={this.handleMonnaie}
                            type="number"
                            style={{color:"black"}}
                          />
                    </Col>
                    <Col md="6">
                        <label
                              className="form-control-label"
                              htmlFor="input-username"
                              >
                                Monnaie :
                      </label>
                      <Input
                            className="form-control-alternative mr-1"
                            readOnly
                            id="monnaie"
                            defaultValue="0.0000 FCFA"
                            type="text"
                            // style={{color:this.state.couleur}}
                          />
                           {/* <div id="valideAchat" class="invalid-feedback">
                            Le montant encaissé est insufisantt.
                           </div> */}
                    </Col>
                  </Row>
                  </div>
                  
                      <Row className="mt-4 mb-3">
                        
                        <Col md="6">
                          <div style={{textAlign:"right"}} >
                            <Button
                                color="secondary" 
                                // onClick={this.handleRetour}
                                size="md"
                                        >
                                        Annuler
                            </Button>
                        </div> 
                        </Col>
                        <Col md="6">
                        <div style={{textAlign:"left"}} >
                          <Button
                              color="primary" 
                              // onClick={this.handleAchat}
                              id="valide"
                              size="md"
                                      >
                                      Valider
                          </Button>
                      </div> 

                        </Col>
                  </Row>
              
                </Form>

            </div>
          </div>
         
        
        </div>
        </div>
    )
  }
}

export default ProductVente