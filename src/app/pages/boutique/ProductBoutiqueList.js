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

export class ProductBoutiqueList extends Component {
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
          <h3 className="page-title"> Liste produits</h3>
          {/* <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/product/form/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Créer produit</Trans>
             </button>
          </nav> */}
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
                  <Col md="2" className=" text-right">
                  <ButtonDropdown direction="left" className="mt-3" size="sm" isOpen={this.state.isOpenCat} toggle={this.toggleCat}>
                    <DropdownToggle caret color="primary">
                      Categorie
                    </DropdownToggle>
                    <DropdownMenu>
                      {/* <DropdownItem header>Header</DropdownItem> */}
                        {
                        this.state.categorie.map((val,idx)=>(
                          <>
                          <DropdownItem >{val.nom}</DropdownItem>
                           <DropdownItem divider></DropdownItem>
                          </>
                        ))
                        
                        }
                         
                      {/* <DropdownItem>Categorie 2</DropdownItem> */}
                    </DropdownMenu>
                  </ButtonDropdown>
                  </Col>
                  <Col md="1" className="text-right">
                  <ButtonDropdown className="mt-3" direction="left" size="sm" isOpen={this.state.isOpen} toggle={this.toggleStock}>
                    <DropdownToggle caret color="primary">
                      Stock
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem >Rupture</DropdownItem>
                      <DropdownItem >Disponible</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                  </Col>
                </Row>
                </div>
              <div className="card-body">
              
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Date Expiration</th>
                        <th>Catégorie</th>
                        <th>Temps restant</th>
                        <th>Quantité</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Para</td>
                        <td>10/12/2023</td>
                        <td>Test</td>
                         <td><ProgressBar variant="success" now={50} /></td>
                         <td><label  className="badge badge-pill badge-success">10</label></td>
                         <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>25/05/2022</td>
                        <td>Test 2</td>
                        <td><ProgressBar variant="danger" now={40} /></td>
                        <td><label className="badge badge-pill badge-success">30</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>15/06/2023</td>
                        <td>Test 3</td>
                        <td><ProgressBar variant="success" now={70} /></td>
                        <td><label className="badge badge-pill badge-danger">1</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>15/07/2023</td>
                        <td>Test</td>
                        <td><ProgressBar variant="danger" now={30} /></td>
                        <td><label className="badge badge-pill badge-success">50</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>22/05/2022</td>
                        <td>test 1</td>
                        <td><ProgressBar variant="success" now={80} /></td>
                        <td><label className="badge badge-pill badge-danger">2</label></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
         
        
        </div>
        </div>
    )
  }
}

export default ProductBoutiqueList