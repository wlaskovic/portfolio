import React from 'react';

export const Entry = ({ data }) => {
    return (
        <div className="entry">
            <div className={`title ${data.title_type}`}>{data.title}</div>
            <div className="body">
                {data.body.map((elem, i) => {
                    return <p>{data.text_bold ? <b>{elem}</b> : elem}</p>
                })}
                {data.list_items ? data.list_items.map((li, i) => {
                    return <li key={"header" + i.toString()}>{li}</li>
                }) : null}

            </div>
        </div>
    );
};