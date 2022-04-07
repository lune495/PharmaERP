import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { Trans } from 'react-i18next';
import  { Redirect } from 'react-router-dom'

export class CategorieForm extends Component {
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
          <h3 className="page-title"> Nouvelle Catégorie</h3>
          <nav aria-label="breadcrumb">
            <button onClick={e=>this.setState({ok: <Redirect to="/categorie/list/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Liste catégories</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
            
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Libelle</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Libéllé categorie" />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Description</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                  </Form.Group>
                 
              
                  <div className="row">
                        <div className="col-md-6">
                          <button style={{float:"right"}} type="submit" className="btn btn-primary mr-2">Enregistrer</button>
                        </div>
                        <div className="col-md-6">
                          <button  className="btn btn-dark">Annuler</button>
                        </div>
                  </div>
                  
                  
                </form>
              </div>
             </div>
           </div>
          </div>
        </div>
    )
  }
}

export default CategorieForm