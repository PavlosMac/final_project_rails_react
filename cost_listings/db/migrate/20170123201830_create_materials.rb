class CreateMaterials < ActiveRecord::Migration
  def change
    create_table :materials do |t|
      t.string :materialType
      t.string :description

      t.timestamps null: false
    end
  end
end
