function getCheckout() {
    fetch('https://api.jsonbin.io/b/5cddcc5674ff6726f51e52ee', {
        headers: new Headers({
            'secret-key': '$2a$10$cwSR/WP7sGWANkwnYUYgxeoioPz/qlz/jLg2dvzIi3E2reVS0jCYO'
        })
    }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            let checkout = '<h2>Checkout</h2>';
            let orderSummary = '<h2>Order Summary</h2>';
            data.data.summary.items.forEach(function (item) {
                checkout += `
                <div id="itemsList">
                    <div class="card">
                        <div class="card-body">
                            <ul>
                                <li>Product: ${item.product}</li>
                                <li>Base Name: ${item.base_name}</li>
                                <li>Billing Type: ${item.billing_type}</li>
                                <li>IP Address: ${item.ip_address}</li>
                                <li>Base Price: $${item.base_price}</li>
                                <li>Discount: $${item.discount}</li>
                                <li>Subtotal: $${item.subtotal}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            });
            document.getElementById('items').innerHTML = checkout
            orderSummary += `
                <hr/>
                <div class="card">
                    <div class="card-body">
                        <ul>
                            <li>Base Total: $${data.data.summary.base_total}</li>
                            <li>Prorate Discount: $${data.data.summary.prorate_discount}</li>
                            <li>Discount: $${data.data.summary.discount}</li>
                            <li>Subtotal: $${data.data.summary.subtotal}</li>
                            <li>Total: $${data.data.summary.total}</li>
                        </ul>
                    </div>
                </div>
            `;
            document.getElementById('orderSummary').innerHTML = orderSummary
        });
};
getCheckout();