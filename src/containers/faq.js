import React from 'react'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer () {
    return(
    <Accordion>
        <Accordion.Title>Fequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item)=>{
                    return(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                    )
                })}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="email address" />
                <OptForm.Button >Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart
                your membership.</OptForm.Text>
                <OptForm.Break/>
            </OptForm>
    </Accordion>
    )
}