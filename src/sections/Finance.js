//The finance section, which can only be accessed from the basked

function Finance(props) {
    //We need a bunch of props and state to make the correct calculations
    const products = props.products;
    const orderedItemsProd1 = props.orderedItemsProd1;
    const orderedItemsProd2 = props.orderedItemsProd2;
    const orderedItemsProd3 = props.orderedItemsProd3;
    const handleSetMonthsToPay = props.handleSetMonthsToPay;
    const monthsToPay = props.monthsToPay;
    const processPayment = props.processPayment;
    const processFinancePayment = props.processFinancePayment;

    return (
        <div className='finance'>
            <h1>Finance Options</h1>
            <h2>Amount to pay: £{(((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2).toFixed(2)}</h2>
            <h2>Amount with finance: £{((((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2)*1.2).toFixed(2)}</h2>
            <p>Atomic Coffee offers a maximum of 12 months' payment on a 20% non-compund interest.</p>
            <p>If you fail in your payments, our founder Dr Banner will pay you a visit ❤</p>
            {/* In this form the user will choose the number of months to pay the total amount */}
            <form>
                <label>In how many months would you like to pay?</label>
                <select id="select-months" onChange={handleSetMonthsToPay} selected="selected">
                    <option value={1} selected>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                </select>
            </form>
            <h3>Amount to pay per month: £{(((((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2)*1.2)/monthsToPay).toFixed(2)}</h3>

            <div className='payment'>
                <button className='pay-button' onClick={processPayment}>Pay without finance</button>
                <button className='pay-button' onClick={processFinancePayment}>Pay with finance</button>
            </div>
        </div>
    )
};

export default Finance;