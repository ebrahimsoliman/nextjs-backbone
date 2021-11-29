import React from 'react';
//props used to parent to child data communication between components
function EventEmitChild(props) {
    let d = 'data from child'
    props.onEventEmit(d)
    return (
        <div><div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1">
                <li>
                    <a className="dropdown-item"
                       href="#">Action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item"
                       href="#">Another action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item"
                       href="#">Something else here
                    </a>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default EventEmitChild;
