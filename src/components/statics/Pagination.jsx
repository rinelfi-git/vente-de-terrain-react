export default function Pagination({source, range, on_page_update }) {
    function range(min, max) {
        const range = [];
        for (let i = min; i <= max; i++) range.push(i);
        return range;
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
            {range(start, end).map(pagination => (
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