json.extract! message, :id, :msg, :created_at, :updated_at
json.url message_url(message, format: :json)
