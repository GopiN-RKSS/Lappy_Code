import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        };
    }

    onDishSelect(dish) {
        this.setState({selectedDish : dish});
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <div className="row mt-3 row-cols-1 row-cols-lg-1 g-3 row-cols-g-3">
                            <div className="col border border-2 p-3">
                                <div className="text-center">
                                    <Media object src={dish.image} alt={dish.name} />
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                    <h4>{dish.price}</h4>
                                </div>
                            </div>
                        </div>
            );
        else
            return(
                <div></div>
            );
     }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                    <div key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <div className="row mt-3 row-cols-1 row-cols-lg-2 g-3 row-cols-g-3">
                            <div className="col border border-2 p-3">
                                <div className="text-center">
                                    <Media object src={dish.image} alt={dish.name} />
                                    <h3>{dish.name}</h3>
                                </div>
                            </div>
                            <div className="col border border-2 p-3">
                                <div className="text-center">
                                    <p>{dish.description}</p>
                                    <h4>{dish.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;