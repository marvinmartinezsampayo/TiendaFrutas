import React from 'react';

const ProductTable = (props) => {

    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h2>La tabla del {props.operator} :)</h2>
            {
                myArray.map((item, i) => {
                    return (
                        <p>{props.operator + ' * ' + item + ' = ' + props.operator * item}</p>
                    );
                })
            }
        </div>
    );
}

export default ProductTable;