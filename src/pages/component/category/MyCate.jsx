import React, {useState} from 'react'

const MyCate = ({category}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="card category-list border-0 my-1">
                <div className="d-flex justify-content-between align-items-center border-0"  onClick={() =>setShow(!show)}>
                    <span>{category}</span>
                    {show? <i className="icon-collapse icon-minus fa fa-minus"></i> : <i className="icon-collapse icon-plus fa fa-plus"></i>}
                </div>
                {show && <div className="card-body p-2">
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action border-0">
                            <span><i className="fa fa-angle-right mr-2"></i>Lady bags</span>
                        </a>
                    </div>
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action border-0">
                            <span><i className="fa fa-angle-right mr-2"></i>Lady bags</span>
                        </a>
                    </div>
                </div>}
            </div>
        </>

    )
}
export default MyCate;