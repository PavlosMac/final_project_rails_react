class ClientsController < ApplicationController

  def index
    @clients = Client.all
    render @clients
  end

end
