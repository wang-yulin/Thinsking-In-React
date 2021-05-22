import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';


class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: 'ball',
            inStockOnly: false
        }
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    }

    handleInstockChange = (inStockOnly) => {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInstockChange}
                />
                <ProductTable 
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];


ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('root')
)