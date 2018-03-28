import React from 'react'
import bakingService from '../../services/baking.service'
import Frank from '../../images/almond_cake_reduced-min.jpg'

class Bread extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bread: null
        }
    }

    componentDidMount() {
        debugger;
        bakingService.readAll('BREAD')
            .then(bread => {
                debugger;
                this.setState({ bread: bread });
                debugger;
                const getPhotos = () => bread.map(item => {
                    debugger;
                    return require(`${item.photo}`)
                });

                this.setState({ photos: getPhotos() });
            })
            .catch(err => {
                debugger;
                console.log(err);
            })
    }

    render() {
        debugger;
        const breadCards = this.state.bread && this.state.photos ? this.state.bread.map((info, index) => {
            return <div className="col s6 m4 l3">
                <div id={info.card_id} className="card">
                    <div className="card-image">
                        <img src={this.state.photos[index]} />
                    </div>
                    <div className="card-content">
                        {info.description}
                    </div>
                </div>
            </div>
        }) : <div>Loading...</div>

        return (
            <div className="container">
                <div className="col s6 m4 l3">
                    <div className="card">
                        <div className="card-image">
                            <img src={Frank} />
                        </div>
                        <div className="card-content">
                            test
                        </div>
                    </div>
                </div>

                {breadCards}

            </div>
        )
    }
}

export default Bread;