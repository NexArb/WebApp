'use client'

const NexBridgePricing = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <PriceBox />
        <PriceBox />
        <PriceBox />
      </div>
    </div>
  )
}

const PriceBox = () => (
  <div className="max-w-sm mx-auto bg-pricing-box p-5 from-purple-700 to-purple-900 text-white rounded-3xl shadow-lg overflow-hidden">
    <div className="p-5">
      <p className="text-white text-center text-3xl font-bold mb-14 leading-tight uppercase">
        Starter
      </p>
      <ul className="list-disc list-inside">
        <li className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
      <div className="flex justify-center mt-20 mb-10">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-3xl font-bold font-semibold text-white mr-2 mb-2">
          € 19,50
        </span>
      </div>
      <div className="flex justify-center my-10">
        <button className="inline-block px-10 py-3 bg-pricing-button text-white text-s font-semibold leading-tight uppercase rounded-3xl shadow-md">
          Purchase
        </button>
      </div>
    </div>
  </div>
)

export default NexBridgePricing
