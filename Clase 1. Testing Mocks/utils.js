import { en, es, Faker } from "@faker-js/faker";

const faker = new Faker({
    locale: [es, en]
})

export const generateUser = () => {
    const numOfProducts = parseInt(faker.string.numeric(1));
    const products = [];
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        products,
        id: faker.database.mongodbObjectId(),
        phone: faker.phone.number(),
        role: faker.number.int() % 2 === 0 ? 'client' : 'seller',
        premium: faker.datatype.boolean(),
        occupation: faker.person.jobTitle()
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
        description: faker.lorem.paragraphs(1),
        code: faker.string.alphanumeric(5).toUpperCase()
    }
}