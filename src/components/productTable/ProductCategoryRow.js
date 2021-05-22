import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr colSpan='2'>
                {this.props.category}
            </tr>
        )
    }
}

export default ProductCategoryRow;