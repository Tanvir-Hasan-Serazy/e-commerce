import { prisma } from "../src/prisma/client.js";
import bcrypt from "bcrypt";
import { ADMIN_PASS } from "../src/secrets.js";

async function main() {
  const hashedPassword = await bcrypt.hash(ADMIN_PASS, 10);

  const admin = await prisma.user.upsert({
    data: {
      firstName: "Tanvir ",
      lastName: "Hasan Serazy",
      dateOfBirth: new Date("2000-01-28"),
      userName: "Admin",
      email: "admin@hcorp.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin Created", admin);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
