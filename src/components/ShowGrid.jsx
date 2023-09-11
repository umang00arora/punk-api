import ShowCard from "./ShowCard";
import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  animation: fadein 0.3s ease-in forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ShowGrid = ({beers}) => {
  //console.log(beers)
  return (
    <FlexGrid>
      {beers?.map((val)=>(<ShowCard key={val.id} image={val.image_url} name={val.name} year={val.tagline}/>))}
    </FlexGrid>
  )
}

export default ShowGrid
