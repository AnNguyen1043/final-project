import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  defaultLightTheme,
  defaultDarkTheme,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';



function AdminDashboard() {
  return (
    <Admin
      lightTheme={defaultLightTheme}
      darkTheme={defaultDarkTheme}
    >

      <Resource
        name="comments"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        icon={ChatBubbleIcon}
      />
      <Resource name="tags" recordRepresentation={tag => tag.name.en} />
    </Admin>
  );
}

export default AdminDashboard;