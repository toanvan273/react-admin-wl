import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, 
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Create,
    Filter
} from 'react-admin';
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            {/* <TextField source="id" /> */}
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="id" />
               {/* <SelectInput optionText="name" /> */}
            </ReferenceInput>
           <TextInput source="id" />
            <TextInput source="title" />
           <TextInput source="body" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);