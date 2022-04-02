import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Trans } from 'react-i18next';
import bsCustomFileInput from 'bs-custom-file-input';
import { ProgressBar } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ok:""
    }
    
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
          <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/product/form/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Créer produit</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des produits</h4>
                
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Date Expiration</th>
                        <th>Reference</th>
                        <th>Temps restant</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Para</td>
                        <td>10/12/2023</td>
                        <td>0000222</td>
                         <td><ProgressBar variant="success" now={50} /></td>
                         <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>25/05/2022</td>
                        <td>00002144</td>
                        <td><ProgressBar variant="danger" now={40} /></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>15/06/2023</td>
                        <td>755422222</td>
                        <td><ProgressBar variant="success" now={70} /></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>15/07/2023</td>
                        <td>2144055</td>
                        <td><ProgressBar variant="danger" now={30} /></td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>22/05/2022</td>
                        <td>201122222</td>
                        <td><ProgressBar variant="success" now={80} /></td>
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

export default ProductList