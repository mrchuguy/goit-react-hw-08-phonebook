import { Box } from '../../components/Box/Box'
import { MessageBox, Message} from './HomePage.styled';


export default function HomePage() {
  return (
    <Box>
      <MessageBox>
        <Message>{`Welcome to Phonebook!`}</Message>
      </MessageBox>
    </Box>
  );
};

