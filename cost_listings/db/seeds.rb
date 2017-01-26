# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Client.destroy_all

client1 = Client.create({
  name: "jason",
  address: "88 Monkey Land, Detroit",
  contact: 911199888
})

client2 = Client.create({
  name: "henry kissinger",
  address: "New TrumpLand, States, Ameriga",
  contact: 111222333
})

client3 = Client.create({
  name: "jack",
  address: "66 Yuppy D st, Hampshire",
  contact: 222449746
})

client4 = Client.create({
  name: "james",
  address: "1 Groppy st, Dampshire",
  contact: 222222
})


Material.destroy_all

material1 = Material.create({
  materialType: "Paper",
  description: "Full paper, white, glossy"
})

material2 = Material.create({
  materialType: "Canvas",
  description: "Full brown, hemp colour, raw"
})

material3 = Material.create({
  materialType: "50/50",
  description: "Mix, grained, dark"
})

material4 = Material.create({
  materialType: "80/20",
  description: "Mixed canvas"
})

Listing.destroy_all

listing1 = Listing.create({
  runs: 3,
  printSize: "A3",
  price: 9.99,
  client_id: client1.id,
  material_id: material2.id

})


listing2 = Listing.create({
  runs: 1,
  printSize: "A5",
  price: 8.99,
  client_id: client3.id,
  material_id: material1.id
})



listing3 = Listing.create({
  runs: 4,
  printSize: "A4",
  price: 8.99,
  client_id: client2.id,
  material_id: material3.id
})

listing4 = Listing.create({
  runs: 4,
  printSize: "A4",
  price: 6.99,
  client_id: client3.id,
  material_id: material4.id
})
