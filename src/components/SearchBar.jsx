import { Routes, Route } from "react-router-dom"
import { Input } from 'antd';

const { Search } = Input;

function SearchBar() {

    function handleSearch(value) {
        console.log(value)
    }

    return (
        <Search placeholder="input search text" onSearch={handleSearch} enterButton className="search-input" allowClear />
    )
}

export default SearchBar