import dynamic from 'next/dynamic'

function CommonMap() {
  const Map = dynamic(
    () => import('../../@core/components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  
  return <Map />
}

export default CommonMap