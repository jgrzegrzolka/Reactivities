import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/modules/activity'

interface IProps {
    activity: IActivity;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDetails: React.FC<IProps> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                Description
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit'></Button>
                    <Button onClick={() => setSelectedActivity(null)} basic color='grey' content='Cancle'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails

