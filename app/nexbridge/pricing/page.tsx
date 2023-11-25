'use client'

function PriceBox() {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-pricing-box from-purple-700 to-purple-900 p-5 text-white shadow-lg">
      <div className="p-5">
        <p className="mb-14 text-center text-3xl font-bold uppercase leading-tight text-white">
          Starter
        </p>
        <ul className="list-inside list-disc">
          <li className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
        <div className="mb-10 mt-20 flex justify-center">
          <span className="mb-2 mr-2 inline-flex items-center rounded-full px-3 py-1 text-3xl font-bold text-white">
            € 19,50
          </span>
        </div>
        <div className="my-10 flex justify-center">
          <button
            type="submit"
            className="text-s inline-block rounded-3xl bg-gradient-button px-10 py-3 font-semibold uppercase leading-tight text-white shadow-md"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
}

function NexBridgePricing() {
  return (
    <div className="container mx-auto p-8">
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <PriceBox />
        <PriceBox />
        <PriceBox />
      </div>
    </div>
  )
}

export default NexBridgePricing
