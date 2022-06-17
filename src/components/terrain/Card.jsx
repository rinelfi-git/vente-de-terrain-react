import { useState } from "react";
import { Carousel, Dropdown } from "react-bootstrap";

export default function TerrainCard({ terrain, on_open_update_modal }) {
    const [carousel_index, set_carousel_index] = useState(0);
    const { apercues, proprietaire } = terrain;
    function handle_carousel_select(index, e) {
        set_carousel_index(index);
    }
    return (
        <div className="w-100 col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card bg-white card-lightblue card-outline w-100">
                <div className="card-body">
                    {
                        apercues.length <= 1 ? (
                            <div className="row">
                                <div className="col-12">
                                    <div style={{ backgroundImage: `url(http://localhost:5000/assets/images/terrain${apercues & apercues.length === 1 ? apercues[0] : 'default.jpg'})`, height: '175px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                </div>
                            </div>
                        ) : (
                            <Carousel activeIndex={carousel_index} onSelect={handle_carousel_select}>
                                {apercues && apercues.map((apercue, key) => (
                                    <Carousel.Item key={key}>
                                        <div className="d-block w-100" style={{ backgroundImage: `url(http://localhost/terrain/${apercue})`, height: '175px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        )
                    }
                    <button className="btn btn-outline-dark btn-flat">
                        <span className="material-icons">insert_photo</span>
                        Changer les aperçues
                    </button>
                    <table className="w-100">
                        <tbody>
                            <tr>
                                <td><small><strong>Adresse</strong></small></td>
                                <td><small>{terrain.adresse}</small></td>
                            </tr>
                            <tr>
                                <td><small><strong>Propriétaire</strong></small></td>
                                <td><small>{proprietaire.nom} {proprietaire.prenom}</small></td>
                            </tr>
                            <tr>
                                <td><small><strong>Surface</strong></small></td>
                                <td className="text-right"><small>{terrain.surface} m²</small></td>
                            </tr>
                            <tr>
                                <td><small><strong>Prix</strong></small></td>
                                <td className="text-right"><small>{terrain.prix} Ariary/m²</small></td>
                            </tr>
                            <tr>
                                <td><small><strong>Relief</strong></small></td>
                                <td><small>{terrain.relief}</small></td>
                            </tr>
                            <tr>
                                <td><small><strong>Status</strong></small></td>
                                <td><small>{terrain.en_vente ? 'en vente' : 'pas en vente'}</small></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col">
                            <div className="text-left">
                                <Dropdown>
                                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                                        action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!" onClick={on_open_update_modal}><span className="material-icons">update</span> modifier</Dropdown.Item>
                                        <Dropdown.Item href="#!"><span className="material-icons">delete_forever</span> supprimer</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-right">
                                <button className="btn btn-default">
                                    <i className="fa fa-map-marker-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}