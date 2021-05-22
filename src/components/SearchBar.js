import React from 'react';

class SearchBar extends React.Component {
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked)
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                />
                <label style={{display: "block"}}>
                    <input 
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={this.handleInStockChange} />
                    Only show product in stock
                </label>
            </div>
        )
    }
}

export default SearchBar;
