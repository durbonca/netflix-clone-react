import React from 'react'

import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faq'
import { HeaderContainer } from '../containers/header'

export default function Home () {
    return(
        <>
            <HeaderContainer>
                <p>hello</p>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}