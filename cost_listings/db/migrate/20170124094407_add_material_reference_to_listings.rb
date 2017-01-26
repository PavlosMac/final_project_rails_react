class AddMaterialReferenceToListings < ActiveRecord::Migration
  def change
    add_reference :listings, :material, index: true, foreign_key: true
  end
end
