import React from 'react';

let badges = [
    {
        className : "indicator --red",
        quantity : 3
    },
    {
        className : "indicator --blue",
        quantity : 1
    },
    {
        className : "indicator --pink",
        quantity : 4
    },
    {
        className : "indicator --yellow",
        quantity : 1
    },
    {
        className : "indicator --orange",
        quantity : 5
    },
    {
        className : "indicator --brown",
        quantity : 9
    },
    {
        className : "indicator --green",
        quantity : 2
    },
    {
        className : "indicator --purple",
        quantity : 6
    }
]

    const Badges = () => {
        return (
            <div className="badges-container__body">
                {badges.map( (item) => {
                    return <div><span className={item.className}>{item.quantity}</span></div>
                })}
            </div>
        );
    };
    
    export default Badges;