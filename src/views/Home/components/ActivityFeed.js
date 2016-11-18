import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const ActivityFeed = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Recent Team Activity
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              <a>Joelle Smith</a> went swimming!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='http://semantic-ui.com/images/avatar2/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='2 days ago' />
            <Feed.Summary>
              Weekly activity minimum complete for <a>Sally Jones</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              <a>Tom Robbins</a> set a new record of 13 workouts in a row!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default ActivityFeed