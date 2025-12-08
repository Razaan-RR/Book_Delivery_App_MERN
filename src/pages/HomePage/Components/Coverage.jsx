import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

function Coverage({centerLocations}) {
  const position = [23.685, 90.3563]
  const [search, setSearch] = useState('')

  const filteredLocations = centerLocations.filter(
    (center) =>
      center.district.toLowerCase().includes(search.toLowerCase()) ||
      center.city.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="pl-40 py-10 bg-[radial-gradient(circle_at_top_left,#ffe9ec,#e8f3ff,#f4fff0,#fff6e5)] backdrop-blur-xl bg-opacity-60 min-h-screen">
      <h1 className="text-3xl font-bold text-center pb-6 text-gray-800">
        We are available in 64 districts
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by district or city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700">
          Search
        </button>
      </div>
      <div className="border rounded-lg w-[1000px] h-[400px] overflow-hidden shadow-lg">
        <MapContainer
          className="h-full w-full"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

export default Coverage
