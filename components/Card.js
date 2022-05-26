import Image from 'next/image'
import { CardImage, StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <CardImage>
          <Image src={image} alt={title} layout='fill' objectFit='contain' priority />
        </CardImage>
      </div>
    </StyledCard>
  )
}
