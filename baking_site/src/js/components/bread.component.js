import React from 'react'
import bakingService from '../../services/baking.service'

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
            })
            .catch(err => {
                debugger;
                console.log(err);
            })
    }

    render() {
        debugger;
        const breadCards = this.state.bread ? this.state.bread.map(info => {
            return <div className="col s6 m4 l3">
                    <div id={info.card_id} className="card">
                        <div className="card-image">
                            <img src='../images/fat_challah_reduced-min.jpg'/>
                        </div>
                        <div className="card-content">
                            {info.description}
                        </div>
                    </div>
                </div>
        }) : <div>Loading...</div>

        return (
            <div className="container">
                <div className="col s4 m3">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src='/Users/sam/Desktop/sam.local/new_start/baking_site/src/js/images/almond_cake_reduced-min.jpg' />
                            
                        </div>
                        <div className="card-content">
                            <p>This was my very first attempt at cooking challah, one of my favorite
                            kinds of bread. I was very sucessful with the braiding, but unfortunately
                            I overbaked this loaf.</p>
                        </div>
                    </div>
                </div>

                {breadCards}


            </div>
        )
    }
}

export default Bread;