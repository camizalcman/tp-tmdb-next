import DetalleContainer from '@/containers/DetalleContainer'

const page = async ({params}) => {
  const { id } = await params;
  return (
    <DetalleContainer id={id} />
  )
}

export default page