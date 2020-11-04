import React, { FormEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/modules/activity'
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}

const ActivityForm : React.FC<IProps> = ({
    setEditMode, 
    activity: initialFormState,
    createActivity,
    editActivity,
    submitting
}) => {
    
    const initializeForm = () => {

        if (initialFormState){
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm); 
    
    const handleSubmit = () => { 
        if (activity.id.length === 0){
            let newActivity = {
                ...activity,
                id: uuid()
            }

            createActivity(newActivity);

        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    placeholder='Title' 
                    name='title' 
                    onChange={handleInputChange} 
                    value={activity.title}></Form.Input>
                <Form.TextArea 
                    rows={2} 
                    placeholder='Description'
                    name='description' 
                    onChange={handleInputChange}  
                    value={activity.description}></Form.TextArea>
                <Form.Input 
                    placeholder='Category'
                    name='category' 
                    onChange={handleInputChange}
                    value={activity.category}></Form.Input>
                <Form.Input 
                    type='datetime-local' 
                    placeholder='Date'
                    name='date' 
                    onChange={handleInputChange} 
                    value={activity.date}></Form.Input>
                <Form.Input 
                    placeholder='City'
                    name='city' 
                    onChange={handleInputChange}  
                    value={activity.city}></Form.Input>
                <Form.Input 
                    placeholder='Venue' 
                    name='venue' 
                    onChange={handleInputChange}  
                    value={activity.venue}></Form.Input>
                <Button 
                    loading={submitting}
                    floated='right' 
                    positive 
                    type='submit' 
                    content='Submit'></Button>
                <Button  onClick={() => setEditMode(false)} floated='right' type='subbuttonmit' content='Cancle'></Button>
            </Form>
        </Segment>
    )
}

export default ActivityForm
