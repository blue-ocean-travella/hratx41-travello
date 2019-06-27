import React from 'react';
import { Grid, Image, Divider} from 'semantic-ui-react';
import styled from 'styled-components';


const StyledDiv = styled.div`
.main{
  background-color: white; 
  margin:0%;
}
.row{
  margin: 2%;
  background-color: white; 
  padding: 0%;
} 
`;

const GridExampleCelledInternally = (props) => {
  return (

<StyledDiv className="main">
<Grid className="main">
    
    <Grid.Row className ='row'> 

    <Grid.Column width={6}>
    <Image src={"16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png"} />
    </Grid.Column>

    </Grid.Row>
  </Grid>
</StyledDiv>
  );
};

export default GridExampleCelledInternally;