import React from 'react';
import './no-match.styles.scss';

export class NoMatch extends React.Component{
    render() {
        return (
        <div className="center">
            <img src="https://i.imgur.com/FOeYt4E.png" alt="broken_page" className="nomatch" />
            <h3 className="center">This Page is Buried in the Sand</h3>
            <p>You have never seen an ostrich head. Whenever you’re around it seems ostriches are avoiding your gaze. You came on this trip specifically to see an ostrich head, but here is this ostrich right in front of you, head invisible. You may never see an ostrich head.
            </p>
        </div>
        )
    }
}