import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { ProgressBar } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import  { Redirect } from 'react-router-dom'

export class UserList extends Component {
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
          <h3 className="page-title"> Liste Utilisateur</h3>
          <nav aria-label="breadcrumb">
            {/* <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Nouvel Utilisateur</a></li>
             
            </ol> */}
            <button onClick={e=>this.setState({ok: <Redirect to="/user/form/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Créer utilisateur</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des utilisateurs</h4>
                
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                    <tr>
                        <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </th>
                        <th> Nom </th>
                        <th> Prenom </th>
                        <th> Email </th>
                        <th> Téléphone </th>
                        <th> Statut Compte </th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">OUEDRAOGO</span>
                          </div>
                        </td>
                        <td> Mahamadi </td>
                        <td> oued@gmail.com </td>
                        <td> 775073620 </td>
                        <td>
                          <div className="badge badge-outline-success">Actif</div>
                        </td>
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

export default UserList