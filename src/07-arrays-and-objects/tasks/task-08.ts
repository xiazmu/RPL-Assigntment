/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];


const completedOrders = orders.filter(
    order => order.status === "completed"
);

console.log("Completed Orders:", completedOrders);


const orderTotals = orders.map(order => {
    const total = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return {
        customer: order.customer,
        total: total
    };
});

console.log("Order Totals:", orderTotals);


const highestSpender = orderTotals.reduce(
    (highest, order) =>
        order.total > highest.total ? order : highest
);

console.log("Highest Spender:", highestSpender);


const totalRevenue = completedOrders.reduce((total, order) => {
    return total + order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}, 0);

console.log("Total Revenue:", totalRevenue);


const purchasedProducts = [
    ...new Set(
        orders.flatMap(order =>
            order.items.map(item => item.product)
        )
    )
];

console.log("Purchased Products:", purchasedProducts);