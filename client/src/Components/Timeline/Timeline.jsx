import React from 'react';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineOppositeContent, TimelineDot
} from "@mui/lab";
import {Event} from "@mui/icons-material";
import {Typography} from "@mui/material";

export function TimeLine({timelines=[]}) {
  return (
    <div>
      <Timeline position='alternate'>
        {timelines.map((item,index)=>(
          <TimelineItem key={index}>
             <TimelineOppositeContent sx={{m:"auto 0"}}
              align='right'
              variant='body2'
              color="textSecondary">
               {item.date.toString().split("T")[0]}
             </TimelineOppositeContent>

             <TimelineSeparator>
               <TimelineConnector/>
                <TimelineDot>
                  <Event/>
                </TimelineDot>
                <TimelineConnector/>
             </TimelineSeparator>
             <TimelineContent sx={{py:"12px", px:2}}>
               <Typography variant='h6'>{item.title}</Typography>
               <Typography>{item.description}</Typography>

             </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}