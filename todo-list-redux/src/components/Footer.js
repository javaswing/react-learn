import React from 'react';
import FilterLink from '../containers/FilterLink'
import { VisiblityFilters } from '../actions';


const Footer = () => (
    <div>
        <span>显示：</span>
        <FilterLink filter={VisiblityFilters.SHOW_ALL}>全部</FilterLink>
        <FilterLink filter={VisiblityFilters.SHOW_ACTIVE}>激活</FilterLink>
        <FilterLink filter={VisiblityFilters.SHOW_COMPLETED}>完成</FilterLink>
    </div>
)

export default Footer