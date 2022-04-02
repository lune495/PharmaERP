import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { ProgressBar } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import  { Redirect } from 'react-router-dom'

export class CategorieList extends Component {
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
          <h3 className="page-title"> Liste catégorie</h3>
          <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/categorie/form/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Créer catégorie</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des catégories</h4>
                
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Libéllé</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15/07/2023</td>
                        <td>Para</td>
                         <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>15/07/2023</td>
                        <td>Messsy</td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>15/07/2023</td>
                        <td>John</td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>15/07/2023</td>
                        <td>Peter</td>
                        <td><span style={{marginRight:10}}><button  className="btn btn-primary ">Modifier</button></span><span><button  className="btn btn-danger mr-2">Supprimer</button></span></td>
                      </tr>
                      <tr>
                        <td>15/07/2023</td>
                        <td>Dave</td>
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

export default CategorieList