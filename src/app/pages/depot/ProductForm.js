import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Trans } from 'react-i18next';
import bsCustomFileInput from 'bs-custom-file-input';
import  { Redirect } from 'react-router-dom'

export class ProductForm extends Component {
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
          <h3 className="page-title"> Nouveau produit</h3>
          <nav aria-label="breadcrumb">
             <button onClick={e=>this.setState({ok: <Redirect to="/product/list/"/>})} className="nav-link btn btn-success create-new-button no-caret">
                + <Trans>Liste produits</Trans>
             </button>
          </nav>
         </div>
         <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
            
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nom du produit</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Date expiration du produit</label>
                    <Form.Control type="date" id="exampleInputUsername1" placeholder="Date expiration du produit" />
                  </Form.Group>


                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nombre de mois avant la date d'expiration</label>
                    <Form.Control type="number" id="exampleInputUsername1" placeholder="Nombre de mois avant la date d'expiration" />
                  </Form.Group>

                  <Form.Group>
                        <label htmlFor="exampleInputUsername1">Catégorie</label>
                        <div>
                          <select className="form-control">
                            <option>Categorie 1</option>
                            <option>Categorie 2</option>
                            <option>Categorie 3</option>
                            <option>Categorie 4</option>
                          </select>
                        </div>
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

export default ProductForm