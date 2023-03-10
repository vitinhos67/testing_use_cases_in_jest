import Order, { OrderInterface } from "../../../src/common/Model/Orders.model"
describe("Should test model Order", () => {

    const createSut = () => {
        return new Order()
    }

    it("Should be a object", async () => {

        const orderPayload: OrderInterface = {
            amount: 10,
            product: "coxinha",
            date_order: new Date()
        }

        const sut = createSut()
        const createOrder = await sut.store(orderPayload)

        expect(createOrder).toEqual(orderPayload)

    })


}) 