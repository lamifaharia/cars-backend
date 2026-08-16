import bcrypt from "bcryptjs"
import prisma from "../src/lib/prisma";
import { Role } from "@prisma/client";

async function main() {
    const password = await bcrypt.hash("passwood456", 10);
    // owner1, owner2, renter1, renter2, admin
    const [owner1, owner2, renter1, renter2, admin] = await Promise.all([
        prisma.user.create({
            data: {
                name: "Nolan",
                email: "nolan@gmail.com",
                password,
                role: Role.OWNER,
            },
        }),

        prisma.user.create({
            data: {
                name: "Harry",
                email: "harry@gmail.com",
                password,
                role: Role.OWNER,
            },
        }),

        prisma.user.create({
            data: {
                name: "John",
                email: "john@gmail.com",
                password,
                role: Role.RENTER,
            },
        }),

        prisma.user.create({
            data: {
                name: "Milo",
                email: "milo@gmail.com",
                password,
                role: Role.RENTER,
            },
        }),

        prisma.user.create({
            data: {
                name: "Admin User",
                email: "admin@gmail.com",
                role: Role.ADMIN,
            }
        })
    ]);

    console.log("created 5 users");

    const carsToCreate = [
        {
            brand: "Toyota",
            model: "Supra MK5",
            dailyRate: 12000,
            location: "Gulshan, Dhaka",
            ownerId: owner1.id,
        },
        {
            brand: "Range Rover",
            model: "Range Rover",
            dailyRate: 10000,
            location: "Mirpur, Dhaka",
            ownerId: owner2.id,
        },
        {
            brand: "BMW",
            model: "M4 Competition",
            dailyRate: 15000,
            location: "Banani, Dhaka",
            ownerId: owner1.id,
        },
        {
            brand: "Mercedes-Benz",
            model: "C-Class",
            dailyRate: 9000,
            location: "Dhanmondi, Dhaka",
            ownerId: owner2.id,
        },
        {
            brand: "Audi",
            model: "R8",
            dailyRate: 20000,
            location: "Gulshan, Dhaka",
            ownerId: owner1.id,
        },
    ];

    const cars = []
    for (const cardata of carsToCreate) {
        const car = await prisma.car.create({ data: cardata});
        cars.push(car)
    }

    console.log(`Created ${cars.length} cars`);

    const bookingsToCreate = [{
        car: cars[0],
    }]
}

main().then(process.exit(0));