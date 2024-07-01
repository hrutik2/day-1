const salesData = [
    { saleId: 1, productId: 101, productName: 'Laptop', category: 'Electronics', price: 899.99, quantity: 1, date: '2023-01-15', customer: 'Alice' },
    { saleId: 2, productId: 102, productName: 'Smartphone', category: 'Electronics', price: 699.50, quantity: 0, date: '2023-01-20', customer: 'Bob' },
    { saleId: 3, productId: 103, productName: 'Tablet', category: 'Electronics', price: 299.75, quantity: 2, date: '2023-02-05', customer: 'Charlie' },
    { saleId: 4, productId: 104, productName: 'Book', category: 'Books', price: 19.99, quantity: 5, date: '2023-02-12', customer: 'David' },
    { saleId: 5, productId: 105, productName: 'Headphones', category: 'Electronics', price: 99.99, quantity: 3, date: '2023-03-01', customer: 'Alice' },
    { saleId: 6, productId: 106, productName: 'Novel', category: 'Books', price: 14.95, quantity: 10, date: '2023-03-15', customer: 'Eve' }
  ];

  
  const filteredTransformedData=salesData.filter(el=>{
    if(el.quantity!==0){
        return el;
    }
})

const categoryPerformance = {
    Electronics: { totalRevenue:0, totalQuantity: 0 },
    Books: { totalRevenue: 0, totalQuantity: 0 }
  };

  salesData.forEach(el=>{
    if(el.category==='Electronics'){
        categoryPerformance.Electronics.totalRevenue=categoryPerformance.Electronics.totalRevenue+(el.price*el.quantity)
        categoryPerformance.Electronics.totalQuantity=categoryPerformance.Electronics.totalQuantity+el.quantity
    }
    else if(el.category==="Book"){
        categoryPerformance.Books.totalRevenue=categoryPerformance.Books.totalRevenue+(el.price*el.quantity)
        categoryPerformance.Books.totalQuantity=categoryPerformance.Books.totalQuantity+el.quantity
    }
  })

  const customerStats = {};
const monthlySales = {};


salesData.forEach(sale => {
    const { customer, price, quantity, date } = sale;
    const saleAmount = price * quantity;


    if (quantity === 0) return;

   
    if (!customerStats[customer]) {
        customerStats[customer] = { totalRevenue: 0, totalTransactions: 0 };
    }
    customerStats[customer].totalRevenue += saleAmount;
    customerStats[customer].totalTransactions += 1;

   
    const month = date.slice(0, 7); 
    if (!monthlySales[month]) {
        monthlySales[month] = 0;
    }
    monthlySales[month] += saleAmount;
});

const topCustomers = Object.keys(customerStats).map(customer => {
    const { totalRevenue, totalTransactions } = customerStats[customer];
    const averagePurchaseValue = totalRevenue / totalTransactions;
    return { customer, totalRevenue, averagePurchaseValue };
}).sort((a, b) => b.totalRevenue - a.totalRevenue)


const filteredTopCustomers = topCustomers.filter(customer => customer.totalRevenue > 0);

const monthlySalesTrend = {};
Object.keys(monthlySales).forEach(month => {
    monthlySalesTrend[month] = parseFloat(monthlySales[month].toFixed(2));
});
