class AddClientReferenceToListings < ActiveRecord::Migration
  def change
    add_reference :listings, :client, index: true, foreign_key: true
  end
end
