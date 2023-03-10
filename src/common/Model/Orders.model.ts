export interface OrderInterface {
    product: string;
    amount: number;
    date_order: Date;
}


class Order {

    async store(order: OrderInterface) {
        console.log("Saving Order...")

        console.log(order)

        return order
    }

}

export default Order
