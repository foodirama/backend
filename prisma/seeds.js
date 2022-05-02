const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function seed() {
    
    await prisma.menuItems.create({
        data: {
          id: 1,
          title: 'Apple',
          price: 5,
          description: "Best apple you've ever had",
          origin: "From North Carolina"
        },
      })
    
}

seed().catch(e => {
    console.log(e);
    // eslint-disable-next-line no-undef
    process.exit(1)
}).finally(() => {
    prisma.$disconnect()
})

module.exports = {
    seed
}