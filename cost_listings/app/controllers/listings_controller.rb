class ListingsController < ApplicationController
  before_action :authenticate_user!

  def index
    @listings = Listing.all

    render :json => @listings.as_json(:include => [:client, :material])
  end

  def create
      listing = Listing.create( show_params )
      render json: listing, status: :created
  end

  def show
    listing = Listing.find( params[:id] )
    render :json => listing
  end



  private
def show_params
  params.require(:show).permit([:runs, :printSize, :price, :client_id, :material_id])
end

end
