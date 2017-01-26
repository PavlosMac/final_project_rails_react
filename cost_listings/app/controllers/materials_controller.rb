class MaterialsController < ApplicationController

  def index
    @materials = Material.all
    render @materials
  end

end
