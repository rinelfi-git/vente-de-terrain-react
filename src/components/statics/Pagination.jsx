import { useState } from "react";

export default function Pagination({source, range: rage_from, on_page_update }) {
    const [current] = useState(1);
    const [end] = useState(5);
    
    function range_from(min, max) {
        const range_from = [];
        for (let i = min; i <= max; i++) range_from.push(i);
        return range_from;
    }

    function handle_navigation_to(target) {
        on_page_update(target);
    }
    return (
        <>
            <li className={`page-item${current <= 1 && ' disabled'}`}>
                <button className="page-link" onClick={() => handle_navigation_to(1)}><span className="material-icons md-18">first_page</span></button>
            </li>
            <li className={`page-item${current <= 1 && ' disabled'}`}>
                <button className="page-link" onClick={() => handle_navigation_to(current - 1)}>
                    <span className="material-icons md-18">chevron_left</span>
                </button>
            </li>
            {range_from(1, end).map(pagination => (
                <li key={pagination} className={`page-item${pagination === current && ' active'}`}>
                    <button className="page-link" onClick={() => handle_navigation_to(pagination)}>{pagination}</button>
                </li>
            ))}
            <li className={`page-item${current >= end && ' disabled'}`}>
                <button className="page-link" onClick={() => handle_navigation_to(current + 1)}>
                    <span className="material-icons md-18">chevron_right</span>
                </button>
            </li>
            <li className={`page-item${current >= end && ' disabled'}`}>
                <button className="page-link" onClick={() => handle_navigation_to(end)}><span className="material-icons md-18">last_page</span></button>
            </li>
        </>
    )
}