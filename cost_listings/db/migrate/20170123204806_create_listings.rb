class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :runs
      t.string :printSize
      t.float :price

      t.timestamps null: false
    end
  end
end
