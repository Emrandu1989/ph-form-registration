import { totalCredits } from "../../App";


const Cart = ({carts}) => {
    const credits =carts.reduce((p, c) => p + c.credit, 0)
    return (
        <div className="bg-white h-56 rounded-lg p-4">
            <div>
                <h3>Credit Hour Remaining {totalCredits - credits} hr</h3>
            </div>
            <div className="divider"></div>
            <div>
                <h4>Course Name</h4>
                <div>
                     {carts.map((c)=> <li key={c.id}>{c.name}</li>)}
                </div>
            </div>
            <div className="divider"></div>
            <div>Total Credit Hour : {credits}</div>
            <div className="divider"></div>
            <div>Total Price : {
                  carts.reduce((p, c) => p + c.price, 0)
                }</div>
        </div>
    );
};

export default Cart;