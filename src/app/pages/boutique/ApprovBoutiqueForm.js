import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Trans } from 'react-i18next';
import bsCustomFileInput from 'bs-custom-file-input';
import  { Redirect } from 'react-router-dom'

export class ApprovBoutiqueForm extends Component {
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
          <h3 className="page-title"> Approvisionner boutique</h3>
          <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/product/list/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Liste produits</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
            
                <form className="forms-sample">
                
                  <Form.Group>
                  <label htmlFor="exampleInputUsername1">Produit</label>
                        <div>
                          <select className="form-control">
                            <option>Produit 1</option>
                            <option>Produit 2</option>
                            <option>Produit 3</option>
                            <option>Produit 4</option>
                          </select>
                        </div>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleInputUsername1">Quantité a ajouter</label>
                    <Form.Control type="number" id="exampleInputUsername1" placeholder="Quantité a ajouter" />
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
        
        
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nombre restant en boutique</label>
                    <Form.Control readOnly type="number" id="exampleInputUsername1" placeholder="Nombre restant en boutique" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nombre restant en dépot</label>
                    <Form.Control readOnly type="number" id="exampleInputUsername1" placeholder="Nombre restant en dépot" />
                  </Form.Group>
               </form>
              </div>
              </div>
          </div>
         </div>
      </div>
    )
  }
}

export default ApprovBoutiqueForm