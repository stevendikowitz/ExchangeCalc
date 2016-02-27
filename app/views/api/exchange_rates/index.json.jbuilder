json.array! @rates do |rate|
  json.partial! 'rate', rate: rate
end
