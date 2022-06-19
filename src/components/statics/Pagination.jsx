import { useState } from "react";

export default function Pagination({source, range, onPageUpdate }) {
    const [current] = useState(1);
    const [end] = useState(5);
    
    function fange(min, max) {
        const fange = [];
        for (let i = min; i <= max; i++) fange.push(i);
        return fange;
    }

    function handleNavigationTo(target) {
        onPageUpdate(target);
    }
    
    return (
        <>
            <li className={`page-item${current <= 1 && ' disabled'}`}>
                <button className="page-link" onClick={() => handleNavigationTo(1)}><span className="material-icons md-18">first_page</span></button>
            </li>
            <li className={`page-item${current <= 1 && ' disabled'}`}>
                <button className="page-link" onClick={() => handleNavigationTo(current - 1)}>
                    <span className="material-icons md-18">chevron_left</span>
                </button>
            </li>
            {fange(1, end).map(pagination => (
                <li key={pagination} className={`page-item${pagination === current && ' active'}`}>
                    <button className="page-link" onClick={() => handleNavigationTo(pagination)}>{pagination}</button>
                </li>
            ))}
            <li className={`page-item${current >= end && ' disabled'}`}>
                <button className="page-link" onClick={() => handleNavigationTo(current + 1)}>
                    <span className="material-icons md-18">chevron_right</span>
                </button>
            </li>
            <li className={`page-item${current >= end && ' disabled'}`}>
                <button className="page-link" onClick={() => handleNavigationTo(end)}><span className="material-icons md-18">last_page</span></button>
            </li>
        </>
    )
}