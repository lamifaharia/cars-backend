import bcrypt from "bcryptjs";
import prisma from "../src/lib/prisma";
import { Role } from "./generated/prisma/enums";
import { BookingStatus, PaymentStatus } from "./generated/prisma/enums";
import { randomUUID } from "crypto";

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
        password,
        role: Role.ADMIN,
      },
    }),
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

  const cars = [];
  for (const cardata of carsToCreate) {
    const car = await prisma.car.create({ data: cardata });
    cars.push(car);
  }

  console.log(`Created ${cars.length} cars`);

  const bookingsToCreate = [
    {
      car: cars[0],
      renterId: renter1.id,
      startDate: new Date("2026-08-17"),
      endDate: new Date("2026-08-17"),
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    },
    {
      car: cars[1],
      renterId: renter1.id,
      startDate: new Date("2026-08-18"),
      endDate: new Date("2026-08-20"),
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    },
    {
      car: cars[2],
      renterId: renter2.id,
      startDate: new Date("2026-08-19"),
      endDate: new Date("2026-08-22"),
      bookingStatus: BookingStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
    },
    {
      car: cars[3],
      renterId: renter1.id,
      startDate: new Date("2026-08-21"),
      endDate: new Date("2026-08-25"),
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    },
    {
      car: cars[4],
      renterId: renter2.id,
      startDate: new Date("2026-08-23"),
      endDate: new Date("2026-08-26"),
      bookingStatus: BookingStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
    },
    {
      car: cars[4],
      renterId: renter1.id,
      startDate: new Date("2026-08-25"),
      endDate: new Date("2026-08-28"),
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    },
    {
      car: cars[0],
      renterId: renter2.id,
      startDate: new Date("2026-08-27"),
      endDate: new Date("2026-08-30"),
      bookingStatus: BookingStatus.CANCELLED,
      paymentStatus: PaymentStatus.FAILED,
    },
    {
      car: cars[2],
      renterId: renter1.id,
      startDate: new Date("2026-09-01"),
      endDate: new Date("2026-09-05"),
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    },
  ];

  for (const b of bookingsToCreate) {
    if (b.car) {
      const totalPrice = 10 * b.car.dailyRate;

      const booking = await prisma.booking.create({
        data: {
          carId: b.car.id,
          renterId: b.renterId,
          startDate: b.startDate,
          endDate: b.endDate,
          totalPrice,
          status: b.bookingStatus,
        },
      });

      if (b.paymentStatus !== PaymentStatus.PENDING) {
        await prisma.payment.create({
          data: {
            bookingId: booking.id,
            amount: totalPrice,
            status: b.paymentStatus,
            transactionId: randomUUID(),
          },
        });
      }
    }
  }

  console.log(`Created ${bookingsToCreate.length}bookings`);
}

main().then(() => {
    process.exit(0)
});
