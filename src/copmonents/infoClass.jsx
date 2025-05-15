import React from 'react'

export default class InfoClass extends Component {
    render () {
        const {name, surName} = this.props;
        return (
            <div>
                привет {name} {surName} тип class
            </div>
        )
    }
}
