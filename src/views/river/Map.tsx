import dynamic from 'next/dynamic'

function RiverMap(regionCoord:any) {
  const Map = dynamic(
    () => import('../../@core/components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  
  return <Map center={regionCoord} />
}

export default RiverMap